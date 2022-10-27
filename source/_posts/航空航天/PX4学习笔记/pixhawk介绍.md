---
title: pixhawk介绍
categories:
  - 航空航天
  - PX4学习笔记
abbrlink: 76c2
date: 2022-10-24 14:42:24
tags:
---

PX4自动驾驶仪软件可分为三大部分：实时操作系统、中间件和飞行控制栈。
1. 实时操作系统NuttX
提供POSIX-style的用户操作环境(如printf(), pthreads,/dev/ttyS1,open(),write(),poll(),ioctl())，进行底层的任务调度。

2. PX4中间件
PX4中间件运行于操作系统之上，提供设备驱动和一个微对象请求代理（micro object request broker，uORB)用于驾驶仪上运行的单个任务之间的异步通信。Px4被3DR开源后，整个代码结构被⼤改，原先的系统被摒弃，进而采用Nuttx，但是核心思想没变-为了简化开发而采用牺牲部分效率的消息传递机制，这是Px4 与ArduPilot 最本质的差别。
uORB：
publisher→【publish()】→micro object request broker→【subscribe()】→subscriber

3. PX4飞行控制栈
飞行控制栈可以使用PX4的控制软件栈，也可以使用其他的控制软件，如APM:Plane、APM:Copter，但必须运行于PX4中间件之上。
此部分又可分为
决策导航部分：根据飞行器自身安全状态和接收到的命令，决定工作于什么模式，下一步应该怎么做。
位置姿态估计部分：根据传感器得到自身的位置和姿态信息，此部分算法含金量最高，算法也相当多。
位置姿态控制部分：根据期望位置和姿态设计控制结构，尽可能快、稳的达到期望位置和姿态。
控制器输出部分：mixer和执行器，pwm限幅。

<https://blog.csdn.net/senlin16888/article/details/51684274> 