import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native";

function Detailbooking() {
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image
                    source={require("../assets/Rectangle.png")}
                    style={style.Img_haven}
                />
            </View>

            <View style={style.container_conten}>
                <ScrollView>
                    <View
                        style={{
                            marginHorizontal: 18,
                            borderBottomWidth: 1,
                            borderColor: "rgba(0, 0, 0, 0.25)",
                        }}
                    >
                        <View>
                            <Text style={style.Presidential_Name}>
                                Presidential Hotel
                            </Text>
                        </View>
                        <View style={style.conten_address}>
                            {
                                <Image
                                    source={require("../assets/icons8-location-48.png")}
                                    style={style.Icon_address}
                                />
                            }
                            <Text style={style.content_address_Address}>
                                12 Eze Adele Road Rumuomasi Lagos Nigeria
                            </Text>
                        </View>
                    </View>

                    <View style={style.Gallery}>
                        <Text style={style.Gallery_Name}>Gallery Photos</Text>
                        <Text style={style.Gallery_Name1}>See All</Text>
                    </View>

                    <ScrollView
                        style={{ marginLeft: 21 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={style.ScrollView_Img_travel}>
                            <Image
                                source={require("../assets/Rectangle_1.png")}
                                style={style.Img_travel}
                            />
                        </View>
                        <View style={style.ScrollView_Img_travel}>
                            <Image
                                source={require("../assets/Rectangle_2.png")}
                                style={style.Img_travel}
                            />
                        </View>
                        <View style={style.ScrollView_Img_travel}>
                            <Image
                                source={require("../assets/Rectangle_3.png")}
                                style={style.Img_travel}
                            />
                        </View>
                        <View style={style.ScrollView_Img_travel}>
                            <Image
                                source={require("../assets/images.jpg")}
                                style={style.Img_travel}
                            />
                        </View>
                    </ScrollView>

                    <View style={{ paddingHorizontal: 21 }}>
                        <View style={style.Detail_Content}>
                            <Text style={style.Detail}>Details</Text>
                        </View>
                        <View style={style.Select_Detail}>
                            <View style={style.Select_Detail_Content}>
                                <Image
                                    source={require("../assets/Vector.png")}
                                    style={{ marginBottom: 7 }}
                                />
                                <Text style={style.Select_Detail_Text}>
                                    Hotels
                                </Text>
                            </View>

                            <View style={style.Select_Detail_Content}>
                                <Image
                                    source={require("../assets/bx_hotel.png")}
                                    style={style.Icon_Select}
                                />
                                <Text style={style.Select_Detail_Text}>
                                    4 Bedrooms
                                </Text>
                            </View>

                            <View style={style.Select_Detail_Content}>
                                <Image
                                    source={require("../assets/bxs_bath.png")}
                                    style={style.Icon_Select}
                                />
                                <Text style={style.Select_Detail_Text}>
                                    2 Bathrooms
                                </Text>
                            </View>
                            <View style={style.Select_Detail_Content}>
                                <Image
                                    source={require("../assets/Vector_2.png")}
                                    style={style.Icon_Select}
                                />
                                <Text style={style.Select_Detail_Text}>
                                    3000 sqft
                                </Text>
                            </View>
                        </View>

                        <View style={style.Descripsion}>
                            <Text style={style.Descripsion_Content}>
                                Descripsion
                            </Text>
                            <Text style ={style.Text}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna
                                aliqua.Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt aliqua. Read more...
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={style.DescripsionFooter}>
                <View style={style.DescripsionContainer}>
                    <Text style={style.DescripsionTitle}>$205</Text>
                    <Text style={style.DescripsionText}>/night</Text>
                </View>
                <TouchableOpacity style={style.PayButton}>
                    <Text style={style.ButtonText}>Book Now!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const style = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
    },

    header: {
        width: "100%",
        height: "30%",
    },
    Img_haven: {
        width: "100%",
        height: "100%",
    },

    container_conten: {
        height: "60%",
    },
    Presidential_Name: {
        color: "#000",
        fontSize: 29,
        lineHeight: 44,
        letterSpacing: 1,
        fontFamily: "Urbanist",
        fontWeight: "700",
        paddingTop: 15,
    },
    conten_address: {
        flexDirection: "row",
        paddingTop: 7,
        justifyContent: "center",
        marginBottom: 30,
    },

    Icon_address: {
        width: 12,
        height: 12,
        marginTop: 4,
    },
    content_address_Address: {
        color: "#202020",
        textAlign: "center",
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: 0.5,
        fontStyle: "normal",
        fontFamily: "Urbanist",
        flexDirection: "row",
    },
    Gallery: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 21,
    },
    Gallery_Name: {
        color: "#000",
        textAlign: "center",
        fontFamily: "Urbanist",
        fontSize: 19,
        fontWeight: "700",
        fontStyle: "normal",
        lineHeight: 27,
        letterSpacing: 1,
    },
    Gallery_Name1: {
        color: "#1AB65C",
        fontFamily: "Urbanist",
        fontSize: 19,
        fontWeight: "700",
        fontStyle: "normal",
        lineHeight: 27,
        letterSpacing: 1,
    },
    Detail_Content: {
        paddingTop: 9,
    },
    Detail: {
        fontSize: 22,
        color: "#000",
        fontFamily: "Urbanist",
        fontSize: 22,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 27,
        letterSpacing: 1,
    },
    Img_travel: {
        width: 130,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    Select_Detail: {
        marginTop: 20,
        height: 40,
        flexDirection: "row",
        fontWeight: "900",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 25,
        color: "#000",
        marginHorizontal: 20,
        justifyContent: "space-between",
    },
    Select_Detail_Content: {
        justifyContent: "center",
        alignItems: "center",
    },
    Descripsion_Content: {
        borderBottomWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.25)",
        paddingTop: 2,
        paddingBottom: 20,
        color: "#000",
        fontFamily: "Urbanist",
        fontSize: 19,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 27,
        letterSpacing: 1,
    },
    DescripsionFooter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        height: "10%",
    },
    Descripsion_Text: {
        color: "#000",
        fontFamily: "Urbanist",
        fontSize: 20,
        fontStyle: "normal",
        lineHeight: 28,
        letterSpacing: 1,
        fontWeight: "600",
        marginTop: 11,
    },
    Text:{
        color: "var(--greyscale-700, #616161)",
 
    },
    DescripsionContainer: {
        alignItems: "center",
        width: 100,
        flexDirection: "row",
    },
    DescripsionTitle: {
        color: "#1AB65C",
        fontFamily: "Urbanist",
        fontSize: 22,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 31,
        letterSpacing: 1,
    },
    DescripsionText: {
        color: "#000",
        fontFamily: "Urbanist",
        fontSize: 11,
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: 31,
        letterSpacing: 1,
        marginTop: 7,
    },
    PayButton: {
        alignItems: "center",
        justifyContent: "center",
        height: 36,
        borderRadius: 27,
        backgroundColor: "#1AB65C",
        width: 238,
        height: 53,
        marginLeft: 26,
        marginBottom: 1,
    },
    ButtonText: {
        color: "#fff",
        fontFamily: "Urbanist",
        fontSize: 17,
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: 24,
        letterSpacing: 1,
    },
});
export default Detailbooking;
