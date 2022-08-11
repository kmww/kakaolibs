import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const Base = styled.li<{ color: string }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 0;
  width: 100%;
  border-bottom: 1px solid ${({ color }) => color};
`;

const AvatarWrapper = styled.div`
  width: 48px;
  height: 48px;
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: contain;
`;

const UsernameWrapper = styled.div`
  margin-left: 8px;
`;

const Username = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
`;

interface Props {
  username: string;
  thumnailImage?: string;
  onClick(): void;
}

const Friend: React.FC<Props> = ({ username, thumnailImage, onClick }) => {
  const theme = useTheme();

  return (
    <Base onClick={onClick} color={theme.colors.gray[100]}>
      <AvatarWrapper>
        <Avatar src={thumnailImage || "/placeholder.png"} />
      </AvatarWrapper>
      <UsernameWrapper>
        <Username>{username}</Username>
      </UsernameWrapper>
    </Base>
  );
};

export default Friend;
