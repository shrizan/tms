import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <AntdRegistry>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#f8961e',
              borderRadius: 0
            }
          }}
        >
          {children}
        </ConfigProvider>
      </AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
