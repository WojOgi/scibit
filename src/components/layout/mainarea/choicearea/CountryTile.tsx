type CountryTileProps = {
  countryName: string;
};

export default function CountryTile({ countryName }: CountryTileProps) {
  return (
    <span
      className="country-tile"
      onClick={() => console.log(`CountryTile: ${countryName}`)}
    >
      {countryName}
    </span>
  );
}
