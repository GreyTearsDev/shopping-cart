import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "./globalStyles";

const renderWithTheme = (ui, options) => render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options);

export * from "@testing-library/react";
export { renderWithTheme };
