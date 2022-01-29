import React from "react";
import { Button, View } from "react-native";

function Header(props) {
    return (
        <View>
            <Button title={props.name}>
            </Button>
        </View>
    );
}

export default Header;