import styleclasses from './foldertree.module.css';
import { Table, Breadcrumbs, Anchor } from '@mantine/core';
import { useState } from 'react';

const mockfolder = [
  { id: "1", name: "root", parent: null, owner: "me", lastModified: "10/11/24" },
  { id: "2", name: "Pictures", parent: "1", owner: "me", lastModified: "10/10/24" },
  { id: "3", name: "Games", parent: "1", owner: "me", lastModified: "10/08/24" },
  { id: "4", name: "Holiday 2024", parent: "2", owner: "me", lastModified: "10/05/24" },
  { id: "5", name: "Marketing Videos", parent: "1", owner: "me", lastModified: "09/20/24" },
  { id: "6", name: "Funny Memes", parent: "2", owner: "me", lastModified: "09/27/24" },
];


function FolderTree() {

    const [folderID, setFolderID] = useState(null);
    const [currentDepth, setcurrentDepth] = useState(0);
    const [crumbsList, setcrumbsList] = useState([]);

    function updateFolderDepth(currentFolderID) {
        const newDepth = currentDepth + 1;

        setFolderID(() => currentFolderID)
        const folderDetails = mockfolder.filter((folder) => folder.id === currentFolderID)
        setcurrentDepth(() => newDepth) 
        setcrumbsList((prev) => [
        ...prev,{
                    title: folderDetails[0].name,
                    id: folderDetails[0].id,
                },
            ]);
        
    }

    function navigateBreadcrumb(folderID) {
        setFolderID(() => folderID)
        console.log(folderID)
        const newCrumbsList = crumbsList.filter((item) => Number(item.id) <= Number(folderID) || item.key === null)
        console.log(crumbsList, newCrumbsList)
        setcrumbsList(() => newCrumbsList);
    }

    const rows = mockfolder.filter((folder) => folder.parent === folderID).map((folder) => (
        <Table.Tr onClick = {() => updateFolderDepth(folder.id)} key={folder.id}>
        <Table.Td className={styleclasses.nameCell}>{folder.name}</Table.Td>
        <Table.Td>{folder.owner}</Table.Td>
        <Table.Td>{folder.lastModified}</Table.Td>
        </Table.Tr>
    ));

    const items = crumbsList.map((item, _) => (
            <Anchor onClick={() => navigateBreadcrumb(item.id)} key={item.id}>
                {item.title}
            </Anchor>
    ))
    return (
        <>
        {items.length > 0 && <Breadcrumbs className={styleclasses.breadcrumbs}> {items}</Breadcrumbs>}

        <div className={styleclasses.tableWrapper}>
        <Table highlightOnHover>
            <Table.Thead>
            <Table.Tr>
                <Table.Th>Name</Table.Th>
                <Table.Th>Owner</Table.Th>
                <Table.Th>Last Modified</Table.Th>
            </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
        </div>
        </>
    );
}

export default FolderTree;
