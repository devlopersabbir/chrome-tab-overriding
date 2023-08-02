import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

export const theme = extendTheme(
    {
        config,
    },
    {
        styles: {
            global: (props: StyleFunctionProps) => ({
                fontFamily: "Ysabeau Office",
                color: mode("gray.800", "whiteAlpha.900")(props),
                bg: mode("white", "gray.800")(props),
                lineHeight: "base",
            }),
        },
    }
);
