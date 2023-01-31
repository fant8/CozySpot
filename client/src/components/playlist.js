import React, { useState } from 'react'
import {
    ReOrderableItem,
    ReOrderableList,
    ReOrderableListGroup
} from 'react-reorderable-list'


const Playlist = () => {
    const [group, setGroup] = useState([
        [
            { id: 1, name: 'song 1', artist: "artist" },
            { id: 2, name: 'song 2 ', artist: "artist" },
            { id: 3, name: 'song 3', artist: "artist" },
            { id: 4, name: 'song 4', artist: "artist" }
        ],
        [
            { id: 1, name: 'song 5', artist: "artist" },
            { id: 2, name: 'song 6', artist: "artist" },
            { id: 3, name: 'song 7', artist: "artist" }
        ]
    ])

    return (
        <div style={{ display: 'flex', margin: "auto", width: '50%', gap: '2%', marginTop: '5%', marginBottom: '5%'}}>
            <ReOrderableListGroup
                //The name for this group must be unique as this serves as the identifier
                //when validating if the item should be transfered to the list or not.
                //Items can only be transferred to the list with the same group name.
                name='uniqueGroupName'
                //group data
                group={group}
                //update list group
                onListGroupUpdate={(newList) => setGroup(newList)}
            >
                {group.map((list, index) => (
                    <ReOrderableList key={`list-${index}`}>
                        {list.map((data, index) => (
                            <ReOrderableItem key={`item-${index}`}>
                                <div style={{ border: '1px solid black', width: '400px', padding: '5%'}}>{data.artist}: {data.name}</div>
                            </ReOrderableItem>
                        ))}
                    </ReOrderableList>
                ))}
            </ReOrderableListGroup>
        </div>
    )

}

export default Playlist