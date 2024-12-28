import { forwardRef, ReactNode, useMemo } from 'react';
import { Platform, StyleProp, StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle } from 'react-native';
import { useColors } from '../hooks/useColors';
import { Icon } from '@tabler/icons-react-native';

export interface InputProps extends TextInputProps {
    icon: Icon, noIcon?: boolean, withBg?: boolean, label?: string, placeholder?: string, containerStyle?: StyleProp<ViewStyle>
}

export default forwardRef(function Input(props: InputProps, ref: React.LegacyRef<TextInput> | undefined) {
    const { icon: Icon, noIcon, withBg, label, placeholder, containerStyle, ...other } = props;
    const colors = useColors();

    const styles = useMemo(() => StyleSheet.create({
        inputContainer: {
            width: '100%',
            height: 40,
            paddingHorizontal: 10,
            borderWidth: 1.5,
            borderColor: colors.border,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
        },
        input: {
            fontFamily: 'Poppins-Medium',
            fontSize: 14,
            color: colors.text[0],
            flex: 1,
        },
        label: {
            fontFamily: 'Poppins-Medium',
            color: colors.text[0],
            fontSize: 15,
            marginLeft: 12,
            marginBottom: 5,
        }
    }), [colors.text, colors.border]);

    return (
        <View style={containerStyle}>
            {!!label && <Text style={styles.label}>{label}</Text>}
            <View style={[styles.inputContainer, , withBg ? { backgroundColor: colors.background } : {}]}>
                <Icon color={colors.icon} size={18} />
                <TextInput
                    placeholder={placeholder}
                    style={styles.input}
                    ref={ref}
                    {...(Platform.OS == 'android' ? {
                        placeholderTextColor: 'rgba(255, 255, 255, 0.5)',
                    } : {})}
                    {...other}
                />
            </View>
        </View>
    )
});

