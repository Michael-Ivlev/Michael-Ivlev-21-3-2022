import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import accuWeatherApi from "../../utils/accuweatherApi";
import CircularProgress from "@mui/material/CircularProgress";
import "./SearchForm.css";
import { useDispatch } from "react-redux";
import { changeUserSelectionKey } from "../../features/userSelectionKey";

const testArray = [
  {
    Version: 1,
    Key: "215854",
    Type: "City",
    Rank: 31,
    LocalizedName: "Tel Aviv",
    Country: {
      ID: "IL",
      LocalizedName: "Israel",
    },
    AdministrativeArea: {
      ID: "TA",
      LocalizedName: "Tel Aviv",
    },
  },
  {
    Version: 1,
    Key: "3431644",
    Type: "City",
    Rank: 45,
    LocalizedName: "Telanaipura",
    Country: {
      ID: "ID",
      LocalizedName: "Indonesia",
    },
    AdministrativeArea: {
      ID: "JA",
      LocalizedName: "Jambi",
    },
  },
  {
    Version: 1,
    Key: "300558",
    Type: "City",
    Rank: 45,
    LocalizedName: "Telok Blangah New Town",
    Country: {
      ID: "SG",
      LocalizedName: "Singapore",
    },
    AdministrativeArea: {
      ID: "05",
      LocalizedName: "South West",
    },
  },
];

function SearchForm(props) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [autoCompleteArray, setAutoCompleteArray] = useState([]);
  const [userSelectedLocation, setUserSelectedLocation] = useState("");
  // const [inputValid, setinputValid] = useState(false);
  const [error, setError] = useState(false);

  // const onInputChange = (event) => {
  //   setInputValue(event.target.value);
  //   setinputValid(/^[A-Za-z ]+$/.test(inputValue));
  //   console.log(inputValid);
  // };

  const onSubmit = () => {
    // testArray.forEach((item) => console.log(item));
    // console.log(userSelectedLocation);
    if (error === false && userSelectedLocation.length > 0) {
      const found = testArray.find(
        (element) => element.LocalizedName === userSelectedLocation
      );
      dispatch(
        changeUserSelectionKey({
          name: found.LocalizedName,
          key: found.Key,
        })
      );
    }

    return;
  };

  useEffect(() => {
    if (
      inputValue.length > 0 &&
      !inputValue.match(/^[a-zA-Z$@$!%*?&#^-_. +]+$/)
    ) {
      setError(true);
    } else {
      setError(false);
    }

    // if (inputValue.length > 3 && error === false) {                     //enable when not in test
    //   accuWeatherApi.getAutoComplite(inputValue).then((res) => {
    //     setAutoCompleteArray(res);
    //   });
    // }
  }, [inputValue, error]);

  return (
    <div className="searchform">
      <Autocomplete
        fullWidth
        onChange={(event) => setUserSelectedLocation(event.target.innerText)}
        id="search-form"
        options={testArray.map((option) => {
          //   return option;
          return option.LocalizedName;
        })}
        renderInput={(params) => {
          return (
            <TextField
              error={error}
              helperText={error ? "Pleas enter only English letters" : ""}
              onChange={(event) => setInputValue(event.target.value)}
              {...params}
              label="Enter Location"
            />
          );
        }}
      />
      <Button onClick={onSubmit} variant="contained">
        GO
      </Button>
    </div>
  );
}

export default SearchForm;
