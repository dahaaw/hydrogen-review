import React from 'react';
export const WidgetTitle = (props) => {
    return React.createElement("h2", { style: Object.assign({ fontSize: 'var(--font-size-heading)', fontWeight: 700, marginBottom: '30px' }, props.style) }, props.text || 'Customer Reviews');
};
export default WidgetTitle;
//# sourceMappingURL=WidgetTitle.js.map