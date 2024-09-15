import PresetTile from "./PresetTile.tsx";

type PresetCountriesProps = {
  presets: { presetName: string; countryNames: string[] }[];
  setListOfSelectedCountries: (listOfSelectedCountries: string[]) => void;
};

export default function PresetCountries({
  presets,
  setListOfSelectedCountries,
}: PresetCountriesProps) {
  return (
    <>
      <h3>
        Presets
        <div className="hint">
          {" "}
          Click preset name to add all preset countries to graph
        </div>
      </h3>
      <section className={"country-tile-container"}>
        {presets.map((preset) => (
          <PresetTile
            presetName={preset.presetName}
            presets={presets}
            setListOfSelectedCountries={setListOfSelectedCountries}
          />
        ))}
      </section>
    </>
  );
}
