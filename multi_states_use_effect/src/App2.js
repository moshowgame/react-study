import { useMemo } from 'react';
import { useEffect, useState } from 'react';

export default function App() {
    const types = useMemo(() => {
        return ['支付宝', '微信', '云闪付', '羊城通'];
    }, []);
    const statusList = useMemo(() => {
        return ['全部', '待支付', '已支付', '发货中', '完成'];
    }, []);
    const [state, setState] = useState({
        type: '支付宝',
        status: '全部',
    });

    const getData = () => {
        console.log(`获取最新列表，类型：${state.type}, 状态：${state.status},  ${Date.now()}`);
    };

    // 当状态或类型更改的时候拉取最新的数据
    useEffect(() => {
        getData();
    }, [state]);

    return (
        <div>
            <div>
                {types.map((val) => {
                    return (
                        <button style={{ color: val == state.type ? 'red' : 'black' }} key={val} onClick={() => setState({status:"全部", type: val})}>
                            {val}
                        </button>
                    );
                })}
            </div>
            <div>
                {statusList.map((val) => {
                    return (
                        <button style={{ color: val == state.status ? 'red' : 'black' }} key={val} onClick={() => setState({...state, status: val})}>
                            {val}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
