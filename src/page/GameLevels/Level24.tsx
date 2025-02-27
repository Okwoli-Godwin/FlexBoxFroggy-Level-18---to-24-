import { styled } from "styled-components";
import Icon from "../../blocks/components/graphic/Icon";
import { selector, useRecoilValue } from "recoil";
import { IconState } from "../../util/state/Recoil";

const Leve24 = () => {
  const numberOFJoan = [1, 2, 3, 4, 5, 6, 7]; // increase the number of box

  const JustifyState = selector({
    key: "charCountState", // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
      const text = get(IconState);

      return text;
    },
  });

  const count = useRecoilValue(JustifyState);

  return (
    <Container>
      <Column>
        {numberOFJoan.map((e) => (
          <Box key={e}></Box>
        ))}
      </Column>
      <Wrapper value={count}>
        {numberOFJoan.map((e) => (
          <Icon key={e} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Leve24;

const Box = styled.div`
  width: 18%;
  height: 18%;
  margin: 2px;
  background-color: red;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;
const Wrapper = styled.div<{ value: string }>`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1em;
  flex-wrap: wrap;
  ${(props) => props.value};
  position: absolute;
`;
const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap-reverse;
  align-content: space-between;
  justify-content: center;
  height: 100%;
  padding: 1em;
`;
