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


// function Foldertree(){
//     return (
//     <>
//         <Stack className={styleclasses.folderrow} >
//         {mockfolder.map((folder, _) => (
//             <div key = {folder.id}>
//                 <Button className={styleclasses.folderButton} variant="default"> {folder.name} </Button>
//              </div>
//             ))
//         }
//         </Stack>
//     </>
//     );
// }

// export default Foldertree;

function FolderTree() {

    const [folderDepth, setFolderDepth] = useState(null);

    function updateFolderDepth () {

    }

    const rows = mockfolder.filter((folder) => folder.parent === folderDepth).map((folder) => (
        <Table.Tr onClick = {() => setFolderDepth(folder.id)} key={folder.id}>
        <Table.Td className={styleclasses.nameCell}>{folder.name}</Table.Td>
        <Table.Td>{folder.owner}</Table.Td>
        <Table.Td>{folder.lastModified}</Table.Td>
        </Table.Tr>
    ));

    return (
        <>
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
