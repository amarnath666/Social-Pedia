import FlexBetween from "../FlexBetween";
import { InputBase, IconButton, useTheme } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchInput = () => {
    const theme = useTheme();
    const neutralLight = theme.palette.neutral.light;

    return (
        <div>
            <FlexBetween
                backgroundColor={neutralLight}
                borderRadius="9px"
                gap="3rem"
                padding="0.1rem 1.5rem"
                >
                <InputBase placeholder="Search..." />
                <IconButton>
                    <Search />
                </IconButton>
            </FlexBetween>
        </div>
    )
}

export default SearchInput;
