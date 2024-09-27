import { useCountriesDataContext } from "../../../../utils/utils.ts";

type PresetTileProps = {
  presets: { presetName: string; countryNames: string[] }[];
  presetName: string;
};

export default function PresetTile({ presets, presetName }: PresetTileProps) {
  const context = useCountriesDataContext();

  function handleClick() {
    const preset = presets.find((preset) => preset.presetName === presetName);
    if (preset) {
      context.setListOfSelectedCountries([...preset.countryNames]);
    }
  }

  return (
    <span className="country-tile" onClick={handleClick}>
      <div>
        <b>{presetName}</b>
      </div>
    </span>
  );
}
