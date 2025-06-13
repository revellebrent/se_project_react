import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

export default function ToggleSwitch() {
  const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <label className="toggle-switch">
      <input
        onChange={handleToggleSwitchChange}
        type="checkbox"
        className="toggle-switch__checkbox"
        checked={currentTemperatureUnit === "C"}
      />
      <span className="toggle-switch__circle"></span>
      <span
        className={`toggle-switch__text toggle-switch__text_F ${
          currentTemperatureUnit === "F"
          ? "toggle-switch__text_color_white"
          : ""
          }`}>F
      </span>
      <span
      className={`toggle-switch__text toggle-switch__text_C ${
        currentTemperatureUnit === "C"
        ? "toggle-switch__text_color_white" : ""
        }`}>C
        </span>
    </label>
  );
}

// const ToggleSwitch =  () => {
//   const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
//     CurrentTemperatureUnitContext
//   );
//   const [isChecked, setIsChecked] = useState(currentTemperatureUnit === "C");
//   useEffect(() => setIsChecked(currentTemperatureUnit === "C"), [currentTemperatureUnit]);

//   return (
//     <div className="toggle-switch">
//       <label className="toggle-switch__label">
//         <input
//         className="toggle-switch_checkbox toggle-switch__checkbox_state_hidden"
//         type="checkbox"
//         name="toggle-switch-checkbox"
//         value={currentTemperatureUnit}
//         onChange={handleToggleSwitchChange}
//         checked={isChecked}
//         />
//         <span className="toggle-switch__checkbox toggle-switch__checkbox_state_visible"/>
//       </label>
//     </div>
//   );
// };

// export default ToggleSwitch;
