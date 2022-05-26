function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    if (string) {
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        return color;
    }
    /* eslint-enable no-bitwise */


}
export default function StringAvatar(name) {
    if (name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
                width: '40px',
                height: '40px',
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,

        };
    }
}