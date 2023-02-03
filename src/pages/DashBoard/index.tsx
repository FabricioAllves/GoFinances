import React from "react";

import {
  Container,
  Header,
  UserWrapper,
  User,
  UserInfo,
  Photo,
  UserGreeting,
  UserName,
  Icon
} from "./styles";

export function DashBoard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/59123245?v=4' }} />
            <User>
              <UserGreeting>Olá</UserGreeting>
              <UserName>Fabricio.H</UserName>
            </User>
          </UserInfo>

          <Icon name="power"/>
        </UserWrapper>
      </Header>
    </Container>
  )
}

