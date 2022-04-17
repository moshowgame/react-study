import { useMemo } from 'react';
import { useEffect, useState } from 'react';

export default function App() {
    const types = useMemo(() => {
        return ['支付宝', '微信', '云闪付', '羊城通'];
    }, []);
    const statusList = useMemo(() => {
        return ['全部', '待支付', '已支付', '发货中', '完成'];
    }, []);

    const [type, setType] = useState('');
    const [status, setStatus] = useState('');

    const getData = (type, status) => {
        setType(type);
        setStatus(status);
        console.log(`获取最新列表，类型：${type}, 状态：${status},  ${Date.now()}`);
    };

    // 第一次初始化，获取数据
    useEffect(() => {
        getData('支付宝', '全部');
    }, []);

    return (
        <div>
            <div>
                {types.map((val) => {
                    return (
                        <button style={{ color: val == type ? 'red' : 'black' }} key={val} onClick={() => getData(val, '全部')}>
                            {val}
                        </button>
                    );
                })}
            </div>
            <div>
                {statusList.map((val) => {
                    return (
                        <button style={{ color: val == status ? 'red' : 'black' }} key={val} onClick={() => getData(type, val)}>
                            {val}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
