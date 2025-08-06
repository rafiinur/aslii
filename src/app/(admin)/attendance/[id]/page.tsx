"use client";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

export default function DetailAbsensiPage() {
  const user = {
    name: "Vermillion Arisyawal",
    division: "Teknologi Informasi",
    role: "Frontend Developer",
    photo: "/img/img-3.png",
  };

  const lineData = [
    { day: "1", Masuk: 8, Keluar: 17 },
    { day: "2", Masuk: 8, Keluar: 18 },
    { day: "3", Masuk: 8, Keluar: 18 },
    { day: "4", Masuk: 9, Keluar: 20 },
    { day: "5", Masuk: 8, Keluar: 18 },
    { day: "6", Masuk: 8, Keluar: 19 },
    { day: "7", Masuk: 8, Keluar: 20 },
    { day: "8", Masuk: 8, Keluar: 20 },
    { day: "9", Masuk: 9, Keluar: 18 },
    { day: "10", Masuk: 8, Keluar: 17 },
    { day: "11", Masuk: 8, Keluar: 17 },
    { day: "12", Masuk: 8, Keluar: 17 },
  ];

  const pieData = [
    { name: "WFO", value: 12, color: "#BFA5FF" },
    { name: "SSPD", value: 2, color: "#91D9E9" },
    { name: "WFH", value: 3, color: "#FFC1C1" },
    { name: "Cuti", value: 4, color: "#FFE0A3" },
  ];

  return (
    <div className="p-6 space-y-6 min-h-screen bg-white dark:bg-[#0D0D0D] text-black dark:text-white transition-colors duration-300">
      <div>
        <h1 className="text-2xl font-bold text-orange-400">Selamat Siang!</h1>
        <p className="text-muted-foreground">Rekap Absensi &gt; Detail Absensi</p>
      </div>

      <div className="flex items-center gap-4 rounded-xl border bg-muted p-4 shadow">
        <Image
          src={user.photo}
          alt={user.name}
          width={64}
          height={64}
          className="rounded-full object-cover"
        />
        <div>
          <h2 className="font-bold text-lg">{user.name}</h2>
          <p className="text-sm text-muted-foreground">Divisi : {user.division}</p>
          <p className="text-sm text-muted-foreground">Role : {user.role}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border bg-card p-4 shadow">
          <h3 className="font-semibold mb-4">Jam Absen</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={lineData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#88888833" />
                <XAxis dataKey="day" stroke="#aaa" fontSize={12} />
                <YAxis domain={[0, 24]} stroke="#aaa" fontSize={12} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1F1F1F", border: "none" }}
                  labelStyle={{ color: "#fff" }}
                  itemStyle={{ color: "#fff" }}
                />
                <Line
                  type="monotone"
                  dataKey="Masuk"
                  stroke="#BFA5FF"
                  strokeWidth={3}
                  dot={({ cx, cy, value }) => (
                    <circle
                      cx={cx}
                      cy={cy}
                      r={5}
                      fill={value > 8 ? "#FF6363" : "#BFA5FF"}
                    />
                  )}
                />
                <Line
                  type="monotone"
                  dataKey="Keluar"
                  stroke="#FFC080"
                  strokeWidth={3}
                  dot={({ cx, cy, value }) => (
                    <circle
                      cx={cx}
                      cy={cy}
                      r={5}
                      fill={value > 17 ? "#FFA500" : "#FFC080"}
                    />
                  )}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#BFA5FF]"></div>
              <span className="text-sm text-muted-foreground">Masuk</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FFC080]"></div>
              <span className="text-sm text-muted-foreground">Keluar</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-card p-4 shadow">
          <h3 className="font-semibold mb-4">Status Kehadiran</h3>
          <div className="h-80 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                  labelLine={false}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            {pieData.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 justify-between"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-muted-foreground font-medium">
                    {item.name}
                  </span>
                </div>
                <span className="text-sm font-bold">&gt;&gt;</span>
                <span className="text-sm font-bold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
