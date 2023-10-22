import styled from "styled-components";
import { Routes } from "@config/routes";

const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const ContactButton = styled.button`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;

  &:hover {
    background: #6941c6;
  }
`;

const DashboardButton = styled.a`
  border-radius: 0.5rem;
  padding: 0.625rem 1.125rem;
  border: 1px solid var(--primary-600, #7f56d9);
  background: var(--primary-600, #7f56d9);
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  line-height: 1.5rem;
`;

const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  align-self: stretch;

  & > a {
    color: #667085;
    text-decoration: none;
  }
`;

const IssuesPage = () => {
  return (
    <div>
      <Header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />
        <NavGroup>
          <a href={Routes.home}>Home</a>
          <a href={Routes.products}>Products</a>
          <a href={Routes.documentation}>Documentation</a>
          <a href={Routes.pricing}>Pricing</a>
        </NavGroup>
        <DashboardButton href={Routes.projects}>Open Dashboard</DashboardButton>
      </Header>
      <ContactButton
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal"
          )
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
    </div>
  );
};

export default IssuesPage;
