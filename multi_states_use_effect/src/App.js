import { useMemo } from 'react';
import { useEffect, useState } from 'react';

export default function App() {
    const types = useMemo(() => {
        return ['支付宝', '微信', '云闪付', '羊城通'];
    }, []);
    const statusList = useMemo(() => {
        return ['全部', '待支付', '已支付', '发货中', '完成'];
    }, []);
    const [type, setType] = useState('支付宝');
    const [status, setStatus] = useState('全部');
    useEffect(() => {
        console.log('useEffect:all')
        console.log(`获取最新列表，类型：${type}, 状态：${status},  ${Date.now()}`);
    }, [type,status]);
    useEffect(() => {
        console.log('useEffect:type')
    }, [type]);
    useEffect(() => {
        console.log('useEffect:status')
    }, [status]);

    return (
        <div>
            <div>
                <h2>zhengkai.blog.csdn.net</h2>
            </div>
            <div>
                {types.map((val) => {
                    return (
                        <button style={{ color: val === type ? 'red' : 'black' }} key={val} onClick={() => setType(val)}>
                            {val}
                        </button>
                    );
                })}
            </div>
            <div>
                {statusList.map((val) => {
                    return (
                        <button style={{ color: val === status ? 'red' : 'black' }} key={val} onClick={() => setStatus(val)}>
                            {val}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
