import { icons } from './constants.js';
import styled, { css } from 'styled-components';
import { applyFlex } from './utils.js';
import { useState } from 'react';

const StyledHeader = styled.header`
  ${props => applyFlex(props)}
  padding: 0 80px;
  border-bottom: solid 1px;

  h1 {
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 50px;
    margin: 16px 40px 16px 0;
  }
`;

const StyledDiv = styled.div`
  ${props => applyFlex(props)}
  margin-top: 30px;
  svg {
    margin-left: 24px;
    width: 24px;
  }

  div {
    ${props => applyFlex(props.children.props)}
  }
`;

const StyledUl = styled.ul`
  ${props => applyFlex(props)}
  margin-top: 30px;
  flex-grow: 1;

  .gnbMenu {
    margin-right: 24px;
    font-family: 'Noto Sans KR';
    font-weight: 400;
    font-size: 12px;
    line-height: 26px;
  }

  .gnbSubMenuWrapper {
    margin-top: 4px;
  }

  .gnbSubMenu {
    font-family: 'Noto Sans KR';
    font-size: 10px;
    line-height: 20px;
  }
`;

function GnbLists(props) {
  const { subMenuFlag, gnbMenus, gnbSubMenus } = props;

  function handleMouseEnterSubMenu(e) {
    e.target.style.textDecoration = 'underline';
    e.target.style.color = '#1e88e5';
  }

  function handleMouseLeaveSubMenu(e) {
    e.target.style.textDecoration = 'none';
    e.target.style.color = '#000';
  }

  if (subMenuFlag) {
    return gnbMenus.map((v, i) => (
      <li key={i} className="gnbMenu">
        {v}
        <ul className="gnbSubMenuWrapper">
          {gnbSubMenus[i].map((v, i) => (
            <li
              key={i}
              onMouseEnter={handleMouseEnterSubMenu}
              onMouseLeave={handleMouseLeaveSubMenu}
              className="gnbSubMenu"
            >
              {v}
            </li>
          ))}
        </ul>
      </li>
    ));
  }

  return gnbMenus.map((v, i) => (
    <li key={i} className="gnbMenu">
      {v}
    </li>
  ));
}

function Header() {
  const [subMenuFlag, setSubMenuFlag] = useState(false);

  const gnbMenus = ['든든한 메인요리', '뜨끈한 국물요리', '정갈한 밑반찬'];
  const gnbSubMenus = [['육류 요리', '해산물 요리'], ['국/탕/찌개'], ['나물/무침', '조림/볶음', '절임/장아찌']];

  return (
    <StyledHeader
      flex
      onMouseLeave={() => {
        setSubMenuFlag(false);
      }}
      className="Header"
    >
      <h1>Ordering</h1>
      <StyledUl flex onMouseEnter={() => setSubMenuFlag(true)}>
        <GnbLists gnbMenus={gnbMenus} gnbSubMenus={gnbSubMenus} subMenuFlag={subMenuFlag}></GnbLists>
      </StyledUl>
      <StyledDiv>
        <div flex="true" align="center">
          {icons.search}
          {icons.mypage}
          {icons.shoppingCart}
        </div>
      </StyledDiv>
    </StyledHeader>
  );
}

export default Header;
