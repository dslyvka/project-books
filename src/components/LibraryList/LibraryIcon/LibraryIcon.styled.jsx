import styled from "@emotion/styled";

export const Svg = styled.svg`
fill: ${props => {
    switch (props.loop) {
        case "reading":
            return "#FF6B08" 
        case "already":
            return "#6D7A8D"
        case "going":
            return "#A6ABB9"
        default: 
            return "#A6ABB9" 
    }
}};`