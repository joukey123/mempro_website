import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Collapse from "@mui/material/Collapse";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { itemsDetail } from "../../data";

function ProbeType({ cards, onData, IsNeedleChange }) {
  const [selectSystem, setSelectSystem] = useState("");
  const [selectCard, setSelectCard] = useState("");
  const [selectNeedle, setSelectNeedle] = useState("");
  const [alignType, setAlignType] = useState("Type");
  // const [maxWidth, setMaxWidth] = useState();
  // const tableref = useRef();
  const [isCardChange, setIsCardChange] = useState(false);
  const [isSystemChange, setIsSystemChange] = useState(false);

  const findNeedle = cards.find(
    (card) => card.type.toLowerCase() === selectCard.toLowerCase()
  );

  const getUniqueNeedles = (cards) => {
    return [
      ...new Set(
        cards.reduce((acc, card) => {
          return acc.concat(card.needle);
        }, [])
      ),
    ];
  };

  const getCardSystemsArray = (cards) => {
    return [
      ...new Set(
        cards
          .filter((card) => card.system) // 시스템 값이 있는 카드만 선택
          .map((card) => card.system)
      ),
    ];
  };

  const handleTypeChange = (event) => {
    setAlignType(event.target.value);
    IsNeedleChange(false);
  };

  const handleClickSystem = (event) => {
    setSelectSystem(event.target.value);
    setIsSystemChange(false);
  };
  const handleClickCard = (event) => {
    setSelectCard(event.target.value);
    IsNeedleChange(false);
  };

  const handleClickNeedle = (event) => {
    setSelectNeedle(event.target.value);
    onData(event.target.value);
    IsNeedleChange(false);
  };

  const handleReset = () => {
    setSelectCard("");
    setSelectNeedle("");
    onData("");
    setSelectSystem("");
    IsNeedleChange(false);
  };

  const getTypesBySystem = (cards) => {
    return cards
      .filter((card) => card.system === selectSystem)
      .map((card) => card.type);
  };
  const cardSystems = getCardSystemsArray(cards);
  const totalNeedle = getUniqueNeedles(cards);
  const typesForSelectedSystem = selectSystem
    ? getTypesBySystem(cards, selectSystem)
    : [];

  useEffect(() => {
    setSelectCard("");
    setSelectNeedle("");
  }, [alignType]);

  useEffect(() => {
    setSelectNeedle("");
    onData("");
    setIsCardChange(false);
    setTimeout(() => setIsCardChange((prev) => !prev), 300);
  }, [selectCard]);

  useEffect(() => {
    setSelectCard("");
    setIsCardChange(false);
    setTimeout(() => setIsSystemChange((prev) => !prev), 300);
  }, [selectSystem]);

  return (
    <div
      style={{
        display: "flex",
        paddingLeft: 50,
        flexDirection: "column",
        marginBottom: "100px",
        width: "100%",
        maxWidth: "1100px",
      }}
    >
      <div
        id="itemalign"
        style={{
          borderBottom: "1px solid rgba(0,0,0,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          marginTop: -35,
        }}
      >
        {/* 필터 */}
        <FormControl width={40} size="small" sx={{ transform: "scale(.9)" }}>
          <Select
            value={alignType}
            sx={{
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
            }}
            onChange={(event) => handleTypeChange(event)}
            MenuProps={{
              disableScrollLock: true, // body에 padding-right 적용을 방지합니다.
            }}
          >
            <MenuItem value="Type" sx={{ transform: "scale(.9)" }}>
              Type
            </MenuItem>
            <MenuItem value="Item" sx={{ transform: "scale(.9)" }}>
              Item
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      {alignType === "Type" && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "50px",
            justifyContent: "center",
          }}
        >
          {cardSystems.length !== 0 && (
            <div className="systemType">
              <FormControl sx={{ m: 1, minWidth: 160 }} color="success">
                <InputLabel sx={{ fontSize: 15 }}>Memory Type</InputLabel>
                <Select
                  value={selectSystem}
                  label="System Type"
                  onChange={(event) => handleClickSystem(event)}
                  sx={{
                    backgroundColor: "#EFF5F0",
                    color: "#2F7E32",
                    height: 50,
                  }}
                  MenuProps={{
                    disableScrollLock: true, // body에 padding-right 적용을 방지합니다.
                  }}
                >
                  {cardSystems.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          )}

          {cardSystems.length !== 0 ? (
            <Collapse
              in={selectSystem && isSystemChange}
              orientation="horizontal"
              style={{ transformOrigin: "0 0 0" }}
              // {...(selectCard && isCardChange ? { timeout: 1300 } : {})}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div>
                  <TrendingFlatIcon color="disabled" fontSize="small" />
                </div>
                <div className="cardType">
                  <FormControl sx={{ m: 1, minWidth: 160 }}>
                    <InputLabel sx={{ fontSize: 15 }}>Card Type</InputLabel>

                    <Select
                      value={selectCard}
                      label="Card Type"
                      onChange={(event) => handleClickCard(event)}
                      sx={{
                        backgroundColor: "#EEF4FC",
                        color: "#1976D2",
                        height: 50,
                      }}
                      MenuProps={{
                        disableScrollLock: true, // body에 padding-right 적용을 방지합니다.
                      }}
                    >
                      {typesForSelectedSystem.length !== 0
                        ? typesForSelectedSystem.map((item, index) => (
                            <MenuItem
                              value={item}
                              key={index}
                              sx={{ textTransform: "capitalize" }}
                            >
                              {item}
                            </MenuItem>
                          ))
                        : cards.map((item, index) => (
                            <MenuItem
                              value={item.type}
                              key={index}
                              sx={{ textTransform: "capitalize" }}
                            >
                              {item.type.charAt(0).toUpperCase() +
                                item.type.slice(1)}
                            </MenuItem>
                          ))}
                    </Select>
                  </FormControl>
                </div>
              </div>
            </Collapse>
          ) : (
            <div className="cardType">
              <FormControl sx={{ m: 1, minWidth: 160 }}>
                <InputLabel sx={{ fontSize: 15 }}>Card Type</InputLabel>

                <Select
                  value={selectCard}
                  label="Card Type"
                  onChange={(event) => handleClickCard(event)}
                  sx={{
                    backgroundColor: "#EEF4FC",
                    color: "#1976D2",
                    height: 50,
                  }}
                  MenuProps={{
                    disableScrollLock: true, // body에 padding-right 적용을 방지합니다.
                  }}
                >
                  {typesForSelectedSystem.length !== 0
                    ? typesForSelectedSystem.map((item, index) => (
                        <MenuItem
                          value={item}
                          key={index}
                          sx={{ textTransform: "capitalize" }}
                        >
                          {item}
                        </MenuItem>
                      ))
                    : cards.map((item, index) => (
                        <MenuItem
                          value={item.type}
                          key={index}
                          sx={{ textTransform: "capitalize" }}
                        >
                          {item.type.charAt(0).toUpperCase() +
                            item.type.slice(1)}
                        </MenuItem>
                      ))}
                </Select>
              </FormControl>
            </div>
          )}

          {/* 테스트 */}
          <Collapse
            in={selectCard && isCardChange}
            orientation="horizontal"
            style={{ transformOrigin: "0 0 0" }}
            // {...(selectCard && isCardChange ? { timeout: 1300 } : {})}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {/* 화살표 */}
                <div>
                  <TrendingFlatIcon color="disabled" fontSize="small" />
                </div>

                <FormControl sx={{ m: 1, minWidth: 250 }} error>
                  <InputLabel
                    sx={{
                      fontSize: 15,
                      visibility: isCardChange ? "visible" : "hidden",
                    }}
                  >
                    {selectCard.charAt(0).toUpperCase() + selectCard.slice(1)}
                    &nbsp; Probe Type
                  </InputLabel>
                  <Select
                    value={selectNeedle}
                    label={`${selectCard} Probe Type`}
                    sx={{
                      backgroundColor: "#FDF4ED",
                      color: "#D32F2F",
                      height: 50,
                    }}
                    onChange={(event) => handleClickNeedle(event)}
                    MenuProps={{
                      disableScrollLock: true, // body에 padding-right 적용을 방지합니다.
                    }}
                  >
                    {findNeedle?.needle.map((item, index) => (
                      <MenuItem value={item} key={index}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
          </Collapse>
          <Tooltip title="Reset" arrow>
            <IconButton sx={{ marginLeft: 2 }} onClick={handleReset}>
              <RotateLeftIcon />
            </IconButton>
          </Tooltip>
        </div>
      )}
      {alignType === "Item" && (
        <>
          <Stack
            direction="row"
            spacing={5}
            sx={{ marginTop: "50px" }}
            justifyContent="center"
          >
            {totalNeedle?.map((item, index) => (
              <Button
                variant="outlined"
                size="large"
                value={item}
                onClick={(event) => handleClickNeedle(event)}
                disabled={selectNeedle === item}
                key={index}
              >
                {item}
              </Button>
            ))}
          </Stack>
        </>
      )}
      <div style={{ margin: "20px auto" }}>
        <p style={{ fontSize: 13, color: "rgba(0,0,0,0.8)" }}>
          * Probe 재질에 따른 종류 차이로 상세 스펙은 비슷하거나 동일할 수
          있습니다.
        </p>
      </div>
    </div>
  );
}

export default ProbeType;