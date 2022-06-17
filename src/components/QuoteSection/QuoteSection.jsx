import { v4 as uuidv4 } from 'uuid';
import Quote from '../Quote/Quote';
import {
  Section,
  Container,
  Title,
  ButtonWrapper,
  Button,
} from './QuoteSection.styled';

import { useLocation, useNavigate } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size';

const QuoteSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onlyWidth = useWindowWidth();

  const quotes1 = [
    {
      id: uuidv4(),
      text: 'Швидше сформулювати свою ціль і розпочати читати',
    },
    {
      id: uuidv4(),
      text: 'Пропорційно розділити навантаження на кожен день',
    },
    {
      id: uuidv4(),
      text: 'Відстежувати особистий успіх',
    },
  ];

  const quotes2 = [
    {
      id: uuidv4(),
      text: 'Формувати особисту думку незалежну від інших',
    },
    {
      id: uuidv4(),
      text: 'Підвищити свої професійні якості, опираючись на нові знання',
    },
    {
      id: uuidv4(),
      text: 'Стати цікавим співрозмовником',
    },
  ];
  return (
    <Section width={onlyWidth}>
      <Container>
        <Title>Books Reading</Title>
        <Quote
          title="Допоможе вам"
          quotes={quotes1}
          icon={'icon-Vector-side'}
        />
        <Quote
          title="Також ви зможете "
          quotes={quotes2}
          icon={'icon-Vector-side'}
        />
      </Container>
      {onlyWidth < 768 && (
        <ButtonWrapper>
          <Button
            type="button"
            onClick={() => navigate((location.pathname = '/login'))}
          >
            Увійти
          </Button>

          <Button
            type="button"
            onClick={() => navigate((location.pathname = '/register'))}
          >
            Реєстрація
          </Button>
        </ButtonWrapper>
      )}
    </Section>
  );
};

export default QuoteSection;
