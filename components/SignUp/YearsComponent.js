import React, { useState } from "react";
import { View, Picker } from "react-native";
import SignUpStyles from "./SignUpStyles";
const YearsComponent = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("2021");
  return (
    <View style={SignUpStyles.YearPicker}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="2021" value="2021" />
        <Picker.Item label="2020" value="2020" />
        <Picker.Item label="2019" value="2019" />
        <Picker.Item label="2018" value="2018" />
        <Picker.Item label="2017" value="2017" />
        <Picker.Item label="2016" value="2016" />
        <Picker.Item label="2015" value="2015" />
        <Picker.Item label="2014" value="2014" />
        <Picker.Item label="2013" value="2013" />
        <Picker.Item label="2012" value="2012" />
        <Picker.Item label="2011" value="2011" />
        <Picker.Item label="2010" value="2010" />
        <Picker.Item label="2009" value="2009" />
        <Picker.Item label="2008" value="2008" />
        <Picker.Item label="2007" value="2007" />
        <Picker.Item label="2006" value="2006" />
        <Picker.Item label="2005" value="2005" />
        <Picker.Item label="2004" value="2004" />
        <Picker.Item label="2003" value="2003" />
        <Picker.Item label="2002" value="2002" />
        <Picker.Item label="2001" value="2001" />
        <Picker.Item label="2000" value="2000" />
        <Picker.Item label="1999" value="1999" />
        <Picker.Item label="1998" value="1998" />
        <Picker.Item label="1997" value="1997" />
        <Picker.Item label="1996" value="1996" />
        <Picker.Item label="1995" value="1995" />
        <Picker.Item label="1994" value="1994" />
        <Picker.Item label="1993" value="1993" />
        <Picker.Item label="1992" value="1992" />
        <Picker.Item label="1991" value="1991" />
        <Picker.Item label="1990" value="1990" />
        <Picker.Item label="1989" value="1989" />
        <Picker.Item label="1988" value="1988" />
        <Picker.Item label="1987" value="1987" />
        <Picker.Item label="1986" value="1986" />
        <Picker.Item label="1985" value="1985" />
        <Picker.Item label="1984" value="1984" />
        <Picker.Item label="1983" value="1983" />
        <Picker.Item label="1982" value="1982" />
        <Picker.Item label="1981" value="1981" />
        <Picker.Item label="1980" value="1980" />
        <Picker.Item label="1979" value="1979" />
        <Picker.Item label="1978" value="1978" />
        <Picker.Item label="1977" value="1977" />
        <Picker.Item label="1976" value="1976" />
        <Picker.Item label="1975" value="1975" />
        <Picker.Item label="1974" value="1974" />
        <Picker.Item label="1973" value="1973" />
        <Picker.Item label="1972" value="1972" />
        <Picker.Item label="1971" value="1971" />
        <Picker.Item label="1970" value="1970" />
        <Picker.Item label="1969" value="1969" />
        <Picker.Item label="1968" value="1968" />
        <Picker.Item label="1967" value="1967" />
        <Picker.Item label="1966" value="1966" />
        <Picker.Item label="1965" value="1965" />
        <Picker.Item label="1964" value="1964" />
        <Picker.Item label="1963" value="1963" />
        <Picker.Item label="1962" value="1962" />
        <Picker.Item label="1961" value="1961" />
        <Picker.Item label="1960" value="1960" />
        <Picker.Item label="1959" value="1959" />
        <Picker.Item label="1958" value="1958" />
        <Picker.Item label="1957" value="1957" />
        <Picker.Item label="1956" value="1956" />
        <Picker.Item label="1955" value="1955" />
        <Picker.Item label="1954" value="1954" />
        <Picker.Item label="1953" value="1953" />
        <Picker.Item label="1952" value="1952" />
        <Picker.Item label="1951" value="1951" />
        <Picker.Item label="1950" value="1950" />
        <Picker.Item label="1949" value="1949" />
        <Picker.Item label="1948" value="1948" />
        <Picker.Item label="1947" value="1947" />
        <Picker.Item label="1946" value="1946" />
        <Picker.Item label="1945" value="1945" />
        <Picker.Item label="1944" value="1944" />
        <Picker.Item label="1943" value="1943" />
        <Picker.Item label="1942" value="1942" />
        <Picker.Item label="1941" value="1941" />
        <Picker.Item label="1940" value="1940" />
        <Picker.Item label="1939" value="1939" />
        <Picker.Item label="1938" value="1938" />
        <Picker.Item label="1937" value="1937" />
        <Picker.Item label="1936" value="1936" />
        <Picker.Item label="1935" value="1935" />
        <Picker.Item label="1934" value="1934" />
        <Picker.Item label="1933" value="1933" />
        <Picker.Item label="1932" value="1932" />
        <Picker.Item label="1931" value="1931" />
        <Picker.Item label="1930" value="1930" />
        <Picker.Item label="1929" value="1929" />
        <Picker.Item label="1928" value="1928" />
        <Picker.Item label="1927" value="1927" />
        <Picker.Item label="1926" value="1926" />
        <Picker.Item label="1925" value="1925" />
        <Picker.Item label="1924" value="1924" />
        <Picker.Item label="1923" value="1923" />
        <Picker.Item label="1922" value="1922" />
        <Picker.Item label="1921" value="1921" />
      </Picker>
    </View>
  );
};

export default YearsComponent;
