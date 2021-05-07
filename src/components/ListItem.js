import React from 'react';

import Button from './Button';


const ListItem = (props) => {
    let {
        name,
        temoIndex,
        id,
        onDelete,
        onEdit
    } = props

    return (
        <tr>
            <td>{temoIndex}</td>
            <td>{name}</td>
            <Button event={() => onEdit(id, name)} name={'EDIT'} />
            <Button event={() => onDelete(id)} name={'DELETE'} />
        </tr>
    );
}
export default ListItem;
