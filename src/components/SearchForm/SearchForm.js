import React, { useEffect, useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import accuWeatherApi from "../../utils/accuweatherApi";
import "./SearchForm.css";
import { useDispatch } from "react-redux";
import { changeUserSelectionKey } from "../../features/userSelectionKey";

function SearchForm(props) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [autoCompleteArray, setAutoCompleteArray] = useState([]);
  const [userSelectedLocation, setUserSelectedLocation] = useState("");
  const [error, setError] = useState(false);
  const fetchTimerRef = useRef("");

  const onUserLocationSelect = (locationName) => {
    if (error === false && locationName.length > 0) {
      // search for the element inside autoCompleteArray
      const found = autoCompleteArray.find(
        (element) => element.LocalizedName === locationName
      );
      // when found takes the name and key and sendes them to the global state so we have key that we can use later
      dispatch(
        changeUserSelectionKey({
          name: found.LocalizedName,
          key: found.Key,
        })
      );
    }

    return;
  };
  // checking if the lengh in the input if more that 0 and check if the regex match. sets error state
  useEffect(() => {
    clearTimeout(fetchTimerRef.current); // clears the timer so we can set new 300ms evry time the input changes
    if (
      inputValue.length > 0 &&
      !inputValue.match(/^[a-zA-Z$@$!%*?&#^-_. +]+$/)
    ) {
      setError(true);
    } else {
      setError(false);
    }

    if (error === false && inputValue.length > 0) {
      fetchTimerRef.current = setTimeout(() => {
        // sets timeout prevent api spam ref used for clear timeout without render
        accuWeatherApi
          .getAutoComplite(inputValue)
          .then((res) => {
            setAutoCompleteArray(res);
          })
          .catch((err) => console.log(err));
      }, 300);
    }
  }, [inputValue, error]);

  return (
    <div className="searchform">
      <Autocomplete
        fullWidth
        onChange={(event) => onUserLocationSelect(event.target.innerText)}
        id="search-form"
        options={autoCompleteArray.map((option) => {
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
    </div>
  );
}

export default SearchForm;
