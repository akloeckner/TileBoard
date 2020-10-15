/* Here are some real life examples of Tiles.<br>

#### ALARM

![ALARM](images/tile-screenshots/ALARM.png)

```js 
*/
{
 position: [0, 3],
 type: TYPES.ALARM,
 title: 'Alarm',
 id: 'alarm_control_panel.home_alarm',
 icons: {
    disarmed: 'mdi-bell-off',
    pending: 'mdi-bell',
    armed_home: 'mdi-bell-plus',
    armed_away: 'mdi-bell',
    triggered: 'mdi-bell-ring'
 },
 states: {
    disarmed: 'Disarmed',
    pending: 'Pending',
    armed_home: 'Armed home',
    armed_away: 'Armed away',
    triggered: 'Triggered'
 }
}
/*
```

#### AUTOMATION
Manually trigger an automation

![AUTOMATION](images/tile-screenshots/AUTOMATION.png)

```js
*/
{
    position: [0,2],
    type: TYPES.AUTOMATION,
    title: 'Sunrise Actions',
    subtitle: 'Trigger Automation',
    id: 'automation.sunrise_actions',
    icon: 'mdi-weather-sunny'
}
/*
```

Wouldn't it be nice to just maintain one example file? 

*/
