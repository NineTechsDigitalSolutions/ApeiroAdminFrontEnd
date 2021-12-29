import Layout from "./../../Layout/LayoutMain";
import { Typography, Row, Col, Statistic } from "antd";
import DonutChart from "./../../Components/Charts/DonutChart";
import UsersChart from "./../../Components/Charts/UsersChart";
import { FaUserAltSlash, FaUsers } from "react-icons/fa";
import CountStatistics from "./../../Components/Statistics/CountStatistics";
import LineChart from "./../../Components/Charts/LineChart";
import ColumnChart from "./../../Components/Charts/ColumnChart";
const Statics = () => {
  return (
    <Layout active="statics">
      <div className="white-card">
        <Typography.Title level={2}>Statistics</Typography.Title>
        <Row gutter={[30, 30]} align="middle">
          <Col xs={24} md={15}>
            <DonutChart />
          </Col>
          <Col xs={24} md={9}>
            <Row gutter={[30, 30]}>
              <Col span={24}>
                <div className="stats stat-3">
                  <CountStatistics
                    title="Active Users"
                    value={30}
                    prefix={<FaUsers />}
                  />
                </div>
              </Col>
              <Col span={24}>
                <div className="stats stat-2">
                  <CountStatistics
                    title="Inactive Users"
                    value={50}
                    prefix={<FaUserAltSlash />}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row gutter={[30, 30]}>
          <Col xs={24} lg={12}>
            <div className="mt-30 white-card">
              <Typography.Title level={5}>New Users</Typography.Title>
              <ColumnChart />
            </div>
          </Col>

          <Col xs={24} lg={12}>
            <div className="mt-30 white-card">
              <Typography.Title level={5}>Authors</Typography.Title>
              <ColumnChart />
            </div>
          </Col>
          <Col xs={24}>
            <div className="mt-30 white-card">
              <Typography.Title level={5}>Orders</Typography.Title>
              <ColumnChart />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className="mt-30 white-card">
              <Typography.Title level={5}>Subscriptions</Typography.Title>
              <LineChart />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className="mt-30 white-card">
              <Typography.Title level={5}>Products</Typography.Title>
              <LineChart />
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default Statics;
