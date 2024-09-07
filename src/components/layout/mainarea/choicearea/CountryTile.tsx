type CountryTileProps = {
  countryName: string;
};

export default function CountryTile({ countryName }: CountryTileProps) {
  return <span className="country-tile">{countryName}</span>;
}
