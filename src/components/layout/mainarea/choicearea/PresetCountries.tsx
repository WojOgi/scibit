import PresetTile from "./PresetTile.tsx";

type PresetCountriesProps = {
  presets: { presetName: string; countryNames: string[] }[];
};

export default function PresetCountries({ presets }: PresetCountriesProps) {
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
          <PresetTile presetName={preset.presetName} presets={presets} />
        ))}
      </section>
    </>
  );
}
