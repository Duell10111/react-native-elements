/// <reference types="react" />
import { Button, ButtonProps } from './Button';
export { Button };
export type { ButtonProps };
declare const _default: import("react").FunctionComponent<Omit<import("react-native").TouchableOpacityProps & import("react-native").TouchableNativeFeedbackProps & {
    title?: string | import("react").ReactElement<{}, string | import("react").JSXElementConstructor<any>>;
    titleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    titleProps?: import("..").TextProps;
    buttonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    type?: "solid" | "clear" | "outline";
    loading?: boolean;
    loadingStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    loadingProps?: import("react-native").ActivityIndicatorProps;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    icon?: import("../Icon").IconNode;
    iconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    iconRight?: boolean;
    linearGradientProps?: object;
    TouchableComponent?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    disabled?: boolean;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledTitleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    raised?: boolean;
    iconPosition?: "left" | "right" | "top" | "bottom";
} & Partial<import("../config").ThemeProps<ButtonProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").TouchableOpacityProps & import("react-native").TouchableNativeFeedbackProps & {
    title?: string | import("react").ReactElement<{}, string | import("react").JSXElementConstructor<any>>;
    titleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    titleProps?: import("..").TextProps;
    buttonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    type?: "solid" | "clear" | "outline";
    loading?: boolean;
    loadingStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    loadingProps?: import("react-native").ActivityIndicatorProps;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    icon?: import("../Icon").IconNode;
    iconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    iconRight?: boolean;
    linearGradientProps?: object;
    TouchableComponent?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    disabled?: boolean;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledTitleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    raised?: boolean;
    iconPosition?: "left" | "right" | "top" | "bottom";
} & Partial<import("../config").ThemeProps<ButtonProps>>>;
export default _default;