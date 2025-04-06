import React, { useCallback, useState } from 'react';

function MyComponent() {
  const [counttt, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log(`Count: ${counttt}`);
    setCount(counttt + 1);
  }, [counttt]); // Функция обновится при изменении `count`

  return <button onClick={handleClick}>Увеличить{counttt}</button>;
}

export default MyComponent