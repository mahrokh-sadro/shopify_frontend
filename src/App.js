import * as React from "react";
import "./App.css";
import { useState } from "react";
import Card from "./Card.js";
import StaticCard from "./StaticCard";
import "react-dropdown/style.css";
import Hero from "./Hero";
import Footer from "./Footer";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, TextField, Button } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const engines = ["curie", "ada", "babbage", "davinci"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function App() {
  const [prompt, setPrompt] = useState("");
  const [prompts, setPrompts] = useState([]);

  const [response, setResponse] = useState("");
  const [responses, setResponses] = useState([]);
  const [option, setOption] = useState("curie");

  const [data, setData] = useState({
    prompt: "",
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
  const options = ["curie", "ada", "babbage", "davinci"];

  const theme = useTheme();
  const [engine, setEngine] = React.useState("curie");

  const onSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.openai.com/v1/engines/text-${option}-001/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        setData({ ...data, prompt: prompt });
        setPrompts([...prompts, data.prompt]);
        setResponse(json.choices[0].text);
        setResponses([...responses, json.choices[0].text]);
        setPrompt("");
        setOption("curie");
        setData({ ...data, prompt: "" });
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setEngine(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <div>
      <header class="masthead text-center text-white wrapper ">
        {" "}
        <Hero />{" "}
        <div class="container text">
          <form
            onSubmit={onSubmit}
            style={{
              marginLeft: "420px",
            }}
          >
            <Grid container>
              {" "}
              <Grid item>
                <TextField
                  label="Prompt"
                  variant="outlined"
                  type="text"
                  value={data.prompt}
                  onChange={(e) => {
                    setData({ ...data, prompt: e.target.value });
                  }}
                />{" "}
              </Grid>
              <Grid
                item
                alignItems="stretch"
                style={{
                  display: "flex",
                  marginRight: "20px",
                }}
              >
                <Button type="submit" color="secondary" variant="contained">
                  prompt
                </Button>{" "}
              </Grid>{" "}
            </Grid>
          </form>
          <div>
            <div>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel
                  id="demo-multiple-name-label"
                  style={{ marginLeft: "120px" }}
                >
                  Engine
                </InputLabel>
                <Select
                  style={{
                    marginLeft: "120px",
                  }}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={engine}
                  onChange={handleChange}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  {engines.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, engine, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>{" "}
        </div>
      </header>
      <body id="page-top">
        {prompts
          .map((p, i) => (
            <div key={i}>
              <Card p={p} r={responses[i]} i={i} />
            </div>
          ))
          .reverse()}
        <div>
          <StaticCard />
        </div>
        <Footer />
      </body>
    </div>
  );
}
export default App;
