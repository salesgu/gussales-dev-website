import styled from 'styled-components';
import { Box } from 'reflexbox';
import { BorderRadiuses, Colors, Shadows } from '../../../core/Tokens';

type Props = {
  backgroundColor: Colors;
  borderRadius: BorderRadiuses;
};

export const Card = styled(Box)<Props>`
  width: 100%;
  height: 100%;
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: ${Shadows.ONE};
`;

Card.defaultProps = {
  backgroundColor: Colors.GRAY_10,
  borderRadius: BorderRadiuses.TWO,
};
