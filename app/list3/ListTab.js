"use client";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import ListItem from "./ListItem";

export default function ListTab({ result }) {
  // 카테고리.select.name만 추출하여 배열 생성
  const categoryNames = Array.from(
    new Set(result.map((project) => project.properties.카테고리.select.name))
  );

  return (
    <Tabs>
      <TabList>
        {/* categoryNames 배열을 매핑하여 동적으로 탭 생성 */}
        {categoryNames.map((name) => (
          <Tab key={name}>{name}</Tab>
        ))}
      </TabList>

      <TabPanels>
        {/* 각 탭에 해당하는 ListItem 컴포넌트를 렌더링 */}
        {categoryNames.map((name) => (
          <TabPanel key={name}>
            <ListItem
              result={result.filter(
                (project) => project.properties.카테고리.select.name === name
              )}
            />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
