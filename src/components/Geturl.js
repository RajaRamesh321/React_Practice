export function Geturl(person ,size='s'){
    return (
        'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
    )
}