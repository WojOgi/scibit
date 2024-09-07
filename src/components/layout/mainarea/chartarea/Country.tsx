type CountryProps = {
  countryName: string;
};

export default function Country({ countryName }: CountryProps) {
  return <div>{countryName}</div>;
}
