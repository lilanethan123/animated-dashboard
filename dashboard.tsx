"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  ShoppingCart,
  Activity,
  Bell,
  Search,
  Settings,
  Home,
  PieChart,
  Calendar,
  Mail,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Plus,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  MessageSquare,
  Phone,
  MapPin,
  Clock,
  Star,
  Package,
  Truck,
  CheckCircle,
  Zap,
} from "lucide-react"

// Animated Counter Component
function AnimatedCounter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [value, duration])

  return <span>{count.toLocaleString()}</span>
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const stats = [
    {
      title: "Total Revenue",
      value: 45231,
      change: "+20.1%",
      changeType: "positive",
      icon: DollarSign,
      prefix: "$",
    },
    {
      title: "Active Users",
      value: 2350,
      change: "+180.1%",
      changeType: "positive",
      icon: Users,
    },
    {
      title: "Sales",
      value: 12234,
      change: "-3.2%",
      changeType: "negative",
      icon: ShoppingCart,
    },
    {
      title: "Conversion Rate",
      value: 73,
      change: "+12.5%",
      changeType: "positive",
      icon: Activity,
      suffix: "%",
    },
  ]

  const recentTransactions = [
    {
      id: "TXN001",
      customer: "Sarah Johnson",
      amount: 2340,
      status: "completed",
      time: "2 min ago",
    },
    {
      id: "TXN002",
      customer: "Michael Chen",
      amount: 1250,
      status: "pending",
      time: "5 min ago",
    },
    {
      id: "TXN003",
      customer: "Emma Davis",
      amount: 890,
      status: "completed",
      time: "12 min ago",
    },
    {
      id: "TXN004",
      customer: "James Wilson",
      amount: 3200,
      status: "failed",
      time: "18 min ago",
    },
  ]

  const customers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      phone: "+1 (555) 123-4567",
      location: "New York, NY",
      orders: 12,
      spent: 2340,
      status: "active",
      joinDate: "Jan 15, 2024",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael@example.com",
      phone: "+1 (555) 987-6543",
      location: "San Francisco, CA",
      orders: 8,
      spent: 1890,
      status: "active",
      joinDate: "Feb 3, 2024",
    },
    {
      id: 3,
      name: "Emma Davis",
      email: "emma@example.com",
      phone: "+1 (555) 456-7890",
      location: "Chicago, IL",
      orders: 15,
      spent: 3200,
      status: "inactive",
      joinDate: "Dec 12, 2023",
    },
  ]

  const orders = [
    {
      id: "ORD-001",
      customer: "Sarah Johnson",
      product: "Premium Plan",
      amount: 299,
      status: "delivered",
      date: "Mar 15, 2024",
    },
    {
      id: "ORD-002",
      customer: "Michael Chen",
      product: "Basic Plan",
      amount: 99,
      status: "processing",
      date: "Mar 14, 2024",
    },
    {
      id: "ORD-003",
      customer: "Emma Davis",
      product: "Enterprise Plan",
      amount: 599,
      status: "shipped",
      date: "Mar 13, 2024",
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "Sarah Johnson",
      subject: "Question about my order",
      preview: "Hi, I have a question about my recent order...",
      time: "2 min ago",
      unread: true,
    },
    {
      id: 2,
      sender: "Michael Chen",
      subject: "Feature request",
      preview: "Would love to see a new feature that allows...",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 3,
      sender: "Emma Davis",
      subject: "Thank you!",
      preview: "Just wanted to say thanks for the great service...",
      time: "3 hours ago",
      unread: false,
    },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={stat.title} className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`p-3 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                          index === 0
                            ? "bg-green-50 group-hover:bg-green-100"
                            : index === 1
                              ? "bg-blue-50 group-hover:bg-blue-100"
                              : index === 2
                                ? "bg-purple-50 group-hover:bg-purple-100"
                                : "bg-orange-50 group-hover:bg-orange-100"
                        }`}
                      >
                        <stat.icon
                          className={`w-6 h-6 ${
                            index === 0
                              ? "text-green-600"
                              : index === 1
                                ? "text-blue-600"
                                : index === 2
                                  ? "text-purple-600"
                                  : "text-orange-600"
                          }`}
                        />
                      </div>
                      <div className="flex items-center gap-1">
                        {stat.changeType === "positive" ? (
                          <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-full">
                            <ArrowUpRight className="w-3 h-3" />
                            <span className="text-xs font-medium">{stat.change}</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-red-600 bg-red-50 px-2 py-1 rounded-full">
                            <ArrowDownRight className="w-3 h-3" />
                            <span className="text-xs font-medium">{stat.change}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold text-gray-900">
                        {stat.prefix}
                        <AnimatedCounter value={stat.value} />
                        {stat.suffix}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Revenue Chart */}
              <Card className="lg:col-span-2 border-0 shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">Revenue Analytics</CardTitle>
                      <CardDescription className="text-gray-600">Monthly performance and trends</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Export
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
                    <div className="text-center z-10">
                      <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <BarChart3 className="w-12 h-12 text-white" />
                      </div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">Interactive Revenue Chart</p>
                      <p className="text-sm text-gray-600">Real-time data visualization</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-bold text-gray-900">Recent Activity</CardTitle>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentTransactions.map((transaction, index) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar className="w-12 h-12 ring-2 ring-gray-100 group-hover:ring-blue-200 transition-all duration-200">
                          <AvatarFallback className="bg-gradient-to-br from-blue-100 to-purple-100 text-gray-700 font-semibold">
                            {transaction.customer
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-gray-900">{transaction.customer}</p>
                          <p className="text-sm text-gray-500">{transaction.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">${transaction.amount.toLocaleString()}</p>
                        <Badge
                          variant={
                            transaction.status === "completed"
                              ? "default"
                              : transaction.status === "pending"
                                ? "secondary"
                                : "destructive"
                          }
                          className="text-xs"
                        >
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </>
        )

      case "analytics":
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
                <p className="text-gray-600">Detailed insights and performance metrics</p>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Growth Rate</h3>
                  <p className="text-3xl font-bold text-blue-600">+24.5%</p>
                  <p className="text-sm text-gray-500 mt-2">vs last quarter</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">User Retention</h3>
                  <p className="text-3xl font-bold text-green-600">89.2%</p>
                  <p className="text-sm text-gray-500 mt-2">monthly average</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                    <Activity className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Engagement</h3>
                  <p className="text-3xl font-bold text-purple-600">7.4m</p>
                  <p className="text-sm text-gray-500 mt-2">total interactions</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <PieChart className="w-20 h-20 mx-auto mb-4 text-blue-600" />
                    <p className="text-lg font-semibold text-gray-800">Advanced Analytics</p>
                    <p className="text-gray-600">Detailed charts and metrics would appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "customers":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Customer Management</h2>
                <p className="text-gray-600">Manage and view all your customers</p>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Customer
              </Button>
            </div>

            <div className="grid gap-6">
              {customers.map((customer) => (
                <Card key={customer.id} className="border-0 shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-16 h-16 ring-4 ring-gray-100">
                          <AvatarFallback className="bg-gradient-to-br from-blue-100 to-purple-100 text-lg font-bold">
                            {customer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{customer.name}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                            <div className="flex items-center gap-1">
                              <Mail className="w-4 h-4" />
                              {customer.email}
                            </div>
                            <div className="flex items-center gap-1">
                              <Phone className="w-4 h-4" />
                              {customer.phone}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {customer.location}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={customer.status === "active" ? "default" : "secondary"}>
                            {customer.status}
                          </Badge>
                          <div className="flex gap-1">
                            <Button size="icon" variant="ghost">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="icon" variant="ghost">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="icon" variant="ghost">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600">
                          <p>
                            {customer.orders} orders • ${customer.spent.toLocaleString()} spent
                          </p>
                          <p>Joined {customer.joinDate}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case "orders":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Order Management</h2>
                <p className="text-gray-600">Track and manage all orders</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Plus className="w-4 h-4 mr-2" />
                  New Order
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {orders.map((order) => (
                <Card key={order.id} className="border-0 shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-50 rounded-xl">
                          <Package className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{order.id}</h3>
                          <p className="text-gray-600">
                            {order.customer} • {order.product}
                          </p>
                          <p className="text-sm text-gray-500">{order.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-gray-900">${order.amount}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge
                            variant={
                              order.status === "delivered"
                                ? "default"
                                : order.status === "processing"
                                  ? "secondary"
                                  : "outline"
                            }
                            className="flex items-center gap-1"
                          >
                            {order.status === "delivered" && <CheckCircle className="w-3 h-3" />}
                            {order.status === "processing" && <Clock className="w-3 h-3" />}
                            {order.status === "shipped" && <Truck className="w-3 h-3" />}
                            {order.status}
                          </Badge>
                          <Button size="icon" variant="ghost">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case "messages":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Messages</h2>
                <p className="text-gray-600">Customer communications and support</p>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <MessageSquare className="w-4 h-4 mr-2" />
                New Message
              </Button>
            </div>

            <div className="grid gap-4">
              {messages.map((message) => (
                <Card
                  key={message.id}
                  className={`border-0 shadow-sm hover:shadow-md transition-all duration-300 ${message.unread ? "ring-2 ring-blue-100" : ""}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="bg-gradient-to-br from-blue-100 to-purple-100 font-semibold">
                            {message.sender
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-gray-900">{message.sender}</h3>
                            {message.unread && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                          </div>
                          <h4 className="font-semibold text-gray-800 mb-2">{message.subject}</h4>
                          <p className="text-gray-600">{message.preview}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500 mb-2">{message.time}</p>
                        <div className="flex gap-1">
                          <Button size="icon" variant="ghost">
                            <MessageSquare className="w-4 h-4" />
                          </Button>
                          <Button size="icon" variant="ghost">
                            <Star className="w-4 h-4" />
                          </Button>
                          <Button size="icon" variant="ghost">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case "settings":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
              <p className="text-gray-600">Manage your account and preferences</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900">Profile Settings</CardTitle>
                  <CardDescription>Update your personal information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="Alex Johnson" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="alex@acronix.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue="+1 (555) 123-4567" />
                  </div>
                  <Button className="w-full">Save Changes</Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900">Notifications</CardTitle>
                  <CardDescription>Configure your notification preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-gray-500">Receive updates via email</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enable
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Push Notifications</p>
                      <p className="text-sm text-gray-500">Browser push notifications</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enable
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">SMS Alerts</p>
                      <p className="text-sm text-gray-500">Important updates via SMS</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Disable
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      default:
        return <div>Tab content not found</div>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-72 min-h-screen bg-white/80 backdrop-blur-xl border-r border-gray-200/60 shadow-xl">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/25">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Acronix
                </span>
                <p className="text-xs text-gray-500 font-medium">Dashboard Pro</p>
              </div>
            </div>

            <nav className="space-y-2">
              {[
                { icon: Home, label: "Overview", id: "overview" },
                { icon: BarChart3, label: "Analytics", id: "analytics" },
                { icon: Users, label: "Customers", id: "customers" },
                { icon: ShoppingCart, label: "Orders", id: "orders" },
                { icon: PieChart, label: "Reports", id: "reports" },
                { icon: Calendar, label: "Calendar", id: "calendar" },
                { icon: Mail, label: "Messages", id: "messages", badge: "3" },
                { icon: Settings, label: "Settings", id: "settings" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`
                    w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 group
                    ${
                      activeTab === item.id
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25 transform scale-[1.02]"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/80 hover:scale-[1.01]"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <item.icon
                      className={`w-5 h-5 transition-all duration-300 ${
                        activeTab === item.id ? "text-white" : "text-gray-500 group-hover:text-gray-700"
                      }`}
                    />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <Badge
                      variant="secondary"
                      className={`text-xs font-bold ${
                        activeTab === item.id ? "bg-white/20 text-white" : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {item.badge}
                    </Badge>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="bg-white/80 backdrop-blur-xl border-b border-gray-200/60 px-8 py-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Good morning, Alex ✨
                </h1>
                <p className="text-gray-600 mt-1 font-medium">Here's what's happening with your business today.</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search anything..."
                    className="pl-12 pr-6 py-3.5 w-96 bg-gray-50/80 border border-gray-200/60 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-gray-100/80"
                  />
                </div>
                <Button size="icon" variant="ghost" className="relative hover:bg-gray-100 rounded-xl">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></span>
                </Button>
                <Avatar className="w-11 h-11 ring-4 ring-blue-100 hover:ring-blue-200 transition-all duration-300">
                  <AvatarImage src="/placeholder.svg?height=44&width=44" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold">
                    AX
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>

          <div className="p-8">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  )
}
