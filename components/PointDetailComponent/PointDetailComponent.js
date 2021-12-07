import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Card, CardAction, CardButton } from "react-native-cards";
import PointDetailComponentStyles from "./PointDetailComponentStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome5";
const PointDetailComponent = ({ navigation }) => {
  return (
    <ScrollView style={PointDetailComponentStyles.scrollContainer}>
      <StatusBar style="auto" />
      <View style={PointDetailComponentStyles.CardContainer}>
        <View>
          <Card style={PointDetailComponentStyles.pointDetailCard}>
            <Text style={PointDetailComponentStyles.title}>Point Details</Text>
            <CardAction separator={true} inColumn={false}>
              <Text style={PointDetailComponentStyles.textDate}>Date</Text>
              <Text style={PointDetailComponentStyles.textPoint}>Point</Text>
            </CardAction>
            <CardAction separator={true} inColumn={false}>
              <Text style={PointDetailComponentStyles.textDate}>
                01 Dec, 2021
              </Text>
              <Text style={PointDetailComponentStyles.textPoint}>200</Text>
            </CardAction>
            <CardAction separator={false} inColumn={false}>
              <Text style={PointDetailComponentStyles.textDate}>
                30 Nov, 2021
              </Text>
              <Text style={PointDetailComponentStyles.textPoint}>1,000</Text>
            </CardAction>
            <CardAction separator={false} inColumn={false}>
              <Text style={PointDetailComponentStyles.textDate}>
                30 Nov, 2021
              </Text>
              <Text style={PointDetailComponentStyles.textPoint}>1,000</Text>
            </CardAction>
            <CardAction separator={false} inColumn={false}>
              <Text style={PointDetailComponentStyles.textDate}>
                30 Nov, 2021
              </Text>
              <Text style={PointDetailComponentStyles.textPoint}>1,000</Text>
            </CardAction>
            <CardAction separator={false} inColumn={false}>
              <Text style={PointDetailComponentStyles.textDate}>
                30 Nov, 2021
              </Text>
              <Text style={PointDetailComponentStyles.textPoint}>1,000</Text>
            </CardAction>
            <CardAction separator={false} inColumn={false}>
              <Text style={PointDetailComponentStyles.textDate}>
                30 Nov, 2021
              </Text>
              <Text style={PointDetailComponentStyles.textPoint}>1,000</Text>
            </CardAction>
            <CardAction separator={false} inColumn={false}>
              <Text style={PointDetailComponentStyles.textDate}>
                30 Nov, 2021
              </Text>
              <Text style={PointDetailComponentStyles.textPoint}>1,000</Text>
            </CardAction>
            <CardAction separator={false} inColumn={false}>
              <Text style={PointDetailComponentStyles.textDate}>
                30 Nov, 2021
              </Text>
              <Text style={PointDetailComponentStyles.textPoint}>1,000</Text>
            </CardAction>
            <CardAction separator={false} inColumn={false}>
              <Text style={PointDetailComponentStyles.textDate}>
                30 Nov, 2021
              </Text>
              <Text style={PointDetailComponentStyles.textPoint}>1,000</Text>
            </CardAction>
            <CardAction separator={false} inColumn={false}>
              <Text style={PointDetailComponentStyles.textDate}>
                30 Nov, 2021
              </Text>
              <Text style={PointDetailComponentStyles.textPoint}>1,000</Text>
            </CardAction>
            <CardAction separator={false} inColumn={false}>
              <Text style={PointDetailComponentStyles.textDate}>
                30 Nov, 2021
              </Text>
              <Text style={PointDetailComponentStyles.textPoint}>1,000</Text>
            </CardAction>
            <CardAction separator={false} inColumn={false}>
              <Text style={PointDetailComponentStyles.textDate}>
                30 Nov, 2021
              </Text>
              <Text style={PointDetailComponentStyles.textPoint}>1,000</Text>
            </CardAction>
            <CardAction separator={false} inColumn={false}>
              <Text style={PointDetailComponentStyles.textDate}>
                30 Nov, 2021
              </Text>
              <Text style={PointDetailComponentStyles.textPoint}>1,000</Text>
            </CardAction>
            <CardAction separator={false} inColumn={false}>
              <Text style={PointDetailComponentStyles.textDate}>
                30 Nov, 2021
              </Text>
              <Text style={PointDetailComponentStyles.textPoint}>1,000</Text>
            </CardAction>
            <CardAction separator={false} inColumn={false}>
              <Text style={PointDetailComponentStyles.textDate}>
                30 Nov, 2021
              </Text>
              <Text style={PointDetailComponentStyles.textPoint}>1,000</Text>
            </CardAction>
            <CardAction separator={false} inColumn={false}>
              <Text style={PointDetailComponentStyles.textDate}>
                30 Nov, 2021
              </Text>
              <Text style={PointDetailComponentStyles.textPoint}>1,000</Text>
            </CardAction>
            <CardAction separator={false} inColumn={false}>
              <Text style={PointDetailComponentStyles.textDate}>
                30 Nov, 2021
              </Text>
              <Text style={PointDetailComponentStyles.textPoint}>1,000</Text>
            </CardAction>
            <CardAction separator={true} inColumn={false}>
              <CardButton
                onPress={() => navigation.navigate("Shop")}
                title="RENEW YOUR SUBSCRIPTION"
                color="rgb(16, 86, 82)"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              />
            </CardAction>
          </Card>
        </View>
        <View style={PointDetailComponentStyles.tabContainer}>
          <TouchableOpacity
            style={PointDetailComponentStyles.tabButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={PointDetailComponentStyles.tabIcon}>
              <Icon
                name="home"
                size={20}
                color="#8D2828"
                style={PointDetailComponentStyles.tabIcon}
              />
            </Text>

            <Text style={PointDetailComponentStyles.tabText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={PointDetailComponentStyles.tabButton}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={PointDetailComponentStyles.tabIcon}>
              <Icon2
                name="coins"
                size={20}
                color="#8D2828"
                style={PointDetailComponentStyles.tabIcon}
              />
            </Text>
            <Text style={PointDetailComponentStyles.tabText}>Event</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={PointDetailComponentStyles.tabSelectedButton}
            onPress={() => navigation.navigate("MyPage")}
          >
            <Text style={PointDetailComponentStyles.tabIcon}>
              <Icon2
                name="portrait"
                size={20}
                color="#8D2828"
                style={PointDetailComponentStyles.tabIcon}
              />
            </Text>
            <Text style={PointDetailComponentStyles.tabText}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={PointDetailComponentStyles.tabButton}
            onPress={() => navigation.navigate("Shop")}
          >
            <Text style={PointDetailComponentStyles.tabIcon}>
              <Icon2
                name="shopping-cart"
                size={20}
                color="#8D2828"
                style={PointDetailComponentStyles.tabIcon}
              />
            </Text>
            <Text style={PointDetailComponentStyles.tabText}>Shop</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default PointDetailComponent;
