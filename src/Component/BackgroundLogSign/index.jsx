import styled from "styled-components";

const Background = styled.div`
background-color: ${(props) => (props.secondary) ? props.theme.colors.primary[100] : props.theme.colors.secondary[200] };
padding:${(props) => (props.secondary) ? '16px 0':""};
`;
export default Background;