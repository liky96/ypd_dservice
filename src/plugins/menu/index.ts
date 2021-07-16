/*
 * @Author: liky
 * @Date: 2021-07-06 11:16:50
 * @LastEditTime: 2021-07-08 17:13:26
 * @LastEditors: liky
 * @FilePath: \ypd_dservice\src\plugins\menu\index.ts
 */
export const HeadMenu = [
    {
        path: 'change_rule_configuration',
        title: '异动规则配置'
    },
    {
        path: 'basic_account',
        title: '基础台账'
    },
    {
        path: 'line_blackout',
        title: '线路停电'
    },
    {
        path: 'customer_complaints',
        title: '客户投诉'
    },
    {
        path: 'fault_repair',
        title: '故障抢修'
    }
]

export const MenuObj: SimpleKeyValueObject = {
    change_rule_configuration: [{
        name: "change_rule_maintenance",
        path: "/change_rule_maintenance",
        meta: {
            type: "M",
            title: "异动规则维护"
        },
        component: "change_rule_configuration/index"
    }],
    basic_account: [{
        name: "data_integrity_monitor",
        path: "/",
        meta: {
            type: "D",
            title: "数据完整性监测"
        },
        children: [{
            name: "integrity_monitor_substation",
            path: "/integrity_monitor_substation",
            meta: {
                type: "M",
                title: "营销变电站"
            },
            component: "basic_account/integrity_monitor/substation"
        },
        {
            name: "integrity_monitor_lines",
            path: "/integrity_monitor_lines",
            meta: {
                type: "M",
                title: "营销线路"
            },
            component: "basic_account/integrity_monitor/lines"
        },
        {
            name: "integrity_monitor_transformer",
            path: "/integrity_monitor_transformer",
            meta: {
                type: "M",
                title: "营销变压器"
            },
            component: "basic_account/integrity_monitor/transformer"
        },
        {
            name: "integrity_monitor_substation_pms",
            path: "/integrity_monitor_substation_pms",
            meta: {
                type: "M",
                title: "PMS变电站"
            },
            component: "basic_account/integrity_monitor/substation_pms"
        },
        {
            name: "integrity_monitor_lines_pms",
            path: "/integrity_monitor_lines_pms",
            meta: {
                type: "M",
                title: "PMS线路"
            },
            component: "basic_account/integrity_monitor/lines_pms"
        },
        {
            name: "integrity_monitor_transformer_pms",
            path: "/integrity_monitor_transformer_pms",
            meta: {
                type: "M",
                title: "PMS变压器"
            },
            component: "basic_account/integrity_monitor/transformer_pms"
        }
        ]
    },
    {
        name: "data_accuracy_monitor",
        path: "/",
        meta: {
            type: "D",
            title: "数据准确性监测"
        },
        children: [{
            name: "accuracy_monitor_substation",
            path: "/accuracy_monitor_substation",
            meta: {
                type: "M",
                title: "营销变电站"
            },
            component: "basic_account/accuracy_monitor/substation"
        },
        {
            name: "accuracy_monitor_transformer",
            path: "/accuracy_monitor_transformer",
            meta: {
                type: "M",
                title: "营销变压器"
            },
            component: "basic_account/accuracy_monitor/transformer"
        },
        {
            name: "accuracy_monitor_substation_pms",
            path: "/accuracy_monitor_substation_pms",
            meta: {
                type: "M",
                title: "PMS变电站"
            },
            component: "basic_account/accuracy_monitor/substation_pms"
        },
        {
            name: "accuracy_monitor_lines_pms",
            path: "/accuracy_monitor_lines_pms",
            meta: {
                type: "M",
                title: "PMS线路"
            },
            component: "basic_account/accuracy_monitor/lines_pms"
        },
        {
            name: "accuracy_monitor_transformer_pms",
            path: "/accuracy_monitor_transformer_pms",
            meta: {
                type: "M",
                title: "PMS变压器"
            },
            component: "basic_account/accuracy_monitor/transformer_pms"
        }
        ]
    },
    {
        name: "data_consistency_monitor",
        path: "/",
        meta: {
            type: "D",
            title: "数据一致性监测"
        },
        children: [{
            name: "consistency_monitor_substation",
            path: "/consistency_monitor_substation",
            meta: {
                type: "M",
                title: "变电站一致性监测"
            },
            component: "basic_account/consistency_monitor/substation"
        },
        {
            name: "consistency_monitor_lines",
            path: "/consistency_monitor_lines",
            meta: {
                type: "M",
                title: "线路一致性监测"
            },
            component: "basic_account/consistency_monitor/lines"
        },
        {
            name: "consistency_monitor_transformer",
            path: "/consistency_monitor_transformer",
            meta: {
                type: "M",
                title: "变压器一致性监测"
            },
            component: "basic_account/consistency_monitor/transformer"
        }
        ]
    }],
    line_blackout: [{
        name: "consistency_monitor_transformer_blackout_line",
        path: "/consistency_monitor_transformer_blackout_line",
        meta: {
            type: "M",
            title: "停电线路一致性监测"
        },
        component: "line_blackout/index"
    }],
    customer_complaints: [{
        name: "line_topo_monitor",
        path: "/line_topo_monitor",
        meta: {
            type: "M",
            title: "线路-台区拓扑关系监测"
        },
        component: "customer_complaints/index"
    }],
    fault_repair: [{
        name: "accuracy_monitor_blackout_notification",
        path: "/accuracy_monitor_blackout_notification",
        meta: {
            type: "M",
            title: "停电通知准确性监测"
        },
        component: "fault_repair/notification"
    },
    {
        name: "accuracy_monitor_box_transformer",
        path: "/accuracy_monitor_box_transformer",
        meta: {
            type: "M",
            title: "箱变距离准确性监测"
        },
        component: "fault_repair/box_transformer"
    }
    ]
}
