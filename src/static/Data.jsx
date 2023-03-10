import {
  FaHome,
  FaUsers,
  FaRegHandshake,
  FaPiggyBank,
  FaUserTimes,
  FaBriefcase,
  FaCoins,
  FaUserCog,
  FaClipboardList,
} from 'react-icons/fa';
import { IoReceiptSharp, IoReceipt } from 'react-icons/io5';
import { AiOutlineTransaction, AiOutlineBarChart } from 'react-icons/ai';
import { RiBankFill } from 'react-icons/ri';
import { HiUsers, HiBadgeCheck, HiOutlineUsers } from 'react-icons/hi';
import {
  GiCash,
  GiReceiveMoney,
  GiPaperWindmill,
  GiSettingsKnobs,
} from 'react-icons/gi';
import { BsFillPersonCheckFill } from 'react-icons/bs';

export const sidebarDataOne = [
  { name: 'Users', icon: <HiUsers /> },
  { name: 'Guarantors', icon: <FaUsers /> },
  { name: 'Loans', icon: <GiCash /> },
  { name: 'Decision Models', icon: <FaRegHandshake /> },
  { name: 'Savings', icon: <FaPiggyBank /> },
  { name: 'Loan Requests', icon: <GiReceiveMoney /> },
  { name: 'Whitelist', icon: <BsFillPersonCheckFill /> },
  { name: 'Karma', icon: <FaUserTimes /> },
];

export const sidebarDataTwo = [
  { name: 'Organisation', icon: <FaBriefcase /> },
  { name: 'Loan Products', icon: <GiReceiveMoney /> },
  { name: 'Savings Products', icon: <RiBankFill /> },
  { name: 'Fees and Charges', icon: <FaCoins /> },
  { name: 'Transactions', icon: <AiOutlineTransaction /> },
  { name: 'Services', icon: <GiPaperWindmill /> },
  { name: 'Service Account', icon: <FaUserCog /> },
  { name: 'Settlements', icon: <IoReceiptSharp /> },
  { name: 'Reports', icon: <AiOutlineBarChart /> },
];

export const sidebarDataThree = [
  { name: 'Preferences', icon: <GiSettingsKnobs /> },
  { name: 'Fees and Prices', icon: <HiBadgeCheck /> },
  { name: 'Audits and Logs', icon: <FaClipboardList /> },
];

export const statCardsData = [
  {
    name: 'Users',
    value: 2453,
    icon: <HiOutlineUsers />,
    color: 'rgba(223, 24, 255, 1)',
    background: 'rgba(223, 24, 255, 0.1)',
  },
  {
    name: 'Active Users',
    value: 2453,
    icon: <FaUsers />,
    color: 'rgba(87, 24, 255, 1)',
    background: 'rgba(87, 24, 255, 0.1)',
  },
  {
    name: 'Users with loans',
    value: 12453,
    icon: <IoReceipt />,
    color: 'rgba(245, 95, 68, 1)',
    background: 'rgba(245, 95, 68, 0.1)',
  },
  {
    name: 'Users with savings',
    value: 102453,
    icon: <FaCoins />,
    color: 'rgba(255, 51, 102, 1)',
    background: 'rgba(255, 51, 102, 0.1)',
  },
];
