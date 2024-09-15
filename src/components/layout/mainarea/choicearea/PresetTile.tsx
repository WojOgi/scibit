type PresetTileProps = {
  presets: { presetName: string; countryNames: string[] }[];
  presetName: string;
  setListOfSelectedCountries: (listOfSelectedCountries: string[]) => void;
};

export default function PresetTile({
  presets,
  presetName,
  setListOfSelectedCountries,
}: PresetTileProps) {
  function handleClick() {
    const preset = presets.find((preset) => preset.presetName === presetName);
    if (preset) {
      setListOfSelectedCountries([...preset.countryNames]);
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
