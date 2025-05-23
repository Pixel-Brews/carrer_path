import { useState } from "react";
import { motion } from "framer-motion";
import { format, getDay, isToday } from "date-fns";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FrostedPanel } from "@/components/ui/frosted-panel";
import { Navbar } from "@/components/Layout/Navbar";
import { Footer } from "@/components/Layout/Footer";
import { calendarEvents, careerPaths } from "@/data/mockData";
import { CalendarEvent } from "@/types";

const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null,
  );

  // Function to get events for a specific date
  const getEventsForDate = (date: Date | undefined) => {
    if (!date) return [];

    return calendarEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear()
      );
    });
  };

  // Get events for selected date
  const selectedDateEvents = getEventsForDate(date);

  // Function to get event type color
  const getEventTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      deadline: "bg-red-100 text-red-800",
      workshop: "bg-blue-100 text-blue-800",
      assignment: "bg-purple-100 text-purple-800",
      project: "bg-green-100 text-green-800",
      session: "bg-yellow-100 text-yellow-800",
      tutorial: "bg-indigo-100 text-indigo-800",
      webinar: "bg-pink-100 text-pink-800",
    };

    return colors[type] || "bg-gray-100 text-gray-800";
  };

  // Function to render custom calendar day
  const renderCalendarDay = (day: Date, _: object) => {
    const events = getEventsForDate(day);
    const dayOfWeek = getDay(day);
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    return (
      <div
        className={`relative w-full h-full flex items-center justify-center ${isToday(day) ? "font-bold" : ""}`}
      >
        {day.getDate()}
        {events.length > 0 && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 flex gap-0.5">
            {events.length > 3 ? (
              <div className="h-1 w-1 rounded-full bg-black"></div>
            ) : (
              events.map((_, i) => (
                <div key={i} className="h-1 w-1 rounded-full bg-black"></div>
              ))
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-200">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
              <p className="text-muted-foreground">
                Keep track of upcoming deadlines, events, and milestones
              </p>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Today
              </Button>
              <Button variant="outline" size="sm">
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Calendar */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>
                    {date ? format(date, "MMMM yyyy") : "Select a date"}
                  </CardTitle>
                  <CardDescription>
                    View and manage your learning schedule
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                    components={{
                      Day: renderCalendarDay,
                    }}
                  />
                </CardContent>
              </Card>

              {selectedDateEvents.length > 0 && (
                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <FrostedPanel intensity="light" border className="p-6">
                    <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5" />
                      Events for{" "}
                      {date ? format(date, "MMMM d, yyyy") : "Selected Date"}
                    </h2>

                    <div className="space-y-4">
                      {selectedDateEvents.map((event) => {
                        const courseInfo = careerPaths.find(
                          (course) => course.id === event.courseId,
                        );

                        return (
                          <motion.div
                            key={event.id}
                            className="p-4 rounded-lg bg-white/50 border border-white/20 cursor-pointer"
                            whileHover={{ scale: 1.02 }}
                            onClick={() => setSelectedEvent(event)}
                          >
                            <div className="flex items-start gap-4">
                              <div
                                className={`px-2 py-1 rounded text-xs font-medium ${getEventTypeColor(event.type)}`}
                              >
                                {event.type.charAt(0).toUpperCase() +
                                  event.type.slice(1)}
                              </div>

                              <div className="flex-1">
                                <h3 className="font-medium">{event.title}</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {courseInfo?.title || "General"}
                                </p>
                                {event.description && (
                                  <p className="text-sm mt-2">
                                    {event.description}
                                  </p>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </FrostedPanel>
                </motion.div>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {/* Selected Event Details */}
              {selectedEvent ? (
                <Card className="mb-6">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle>Event Details</CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedEvent(null)}
                      >
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        Back
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div
                          className={`px-2 py-1 inline-block rounded text-xs font-medium mb-2 ${getEventTypeColor(selectedEvent.type)}`}
                        >
                          {selectedEvent.type.charAt(0).toUpperCase() +
                            selectedEvent.type.slice(1)}
                        </div>
                        <h3 className="text-lg font-semibold">
                          {selectedEvent.title}
                        </h3>

                        {selectedEvent.description && (
                          <p className="text-sm text-muted-foreground mt-2">
                            {selectedEvent.description}
                          </p>
                        )}
                      </div>

                      <div className="pt-2 flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-sm">
                          <CalendarIcon className="h-4 w-4" />
                          <span>
                            {new Date(selectedEvent.date).toLocaleDateString()}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-sm">
                          <Info className="h-4 w-4" />
                          <span>
                            Related to:{" "}
                            {careerPaths.find(
                              (c) => c.id === selectedEvent.courseId,
                            )?.title || "General"}
                          </span>
                        </div>
                      </div>

                      <div className="pt-4 flex gap-2">
                        <Button className="flex-1">Add to My Calendar</Button>
                        <Button variant="outline" className="flex-1">
                          Set Reminder
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>
                      Next 7 days in your learning journey
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {calendarEvents
                        .sort(
                          (a, b) =>
                            new Date(a.date).getTime() -
                            new Date(b.date).getTime(),
                        )
                        .slice(0, 5)
                        .map((event) => {
                          const eventDate = new Date(event.date);
                          const isEventToday = isToday(eventDate);

                          return (
                            <div
                              key={event.id}
                              className="border-b last:border-0 pb-3 last:pb-0 cursor-pointer"
                              onClick={() => {
                                setDate(new Date(event.date));
                                setSelectedEvent(event);
                              }}
                            >
                              <div className="flex items-center gap-3 mb-2">
                                <div className="bg-black/5 p-1.5 rounded">
                                  <CalendarIcon className="h-3.5 w-3.5" />
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-sm">
                                    {event.title}
                                  </div>
                                  <div className="flex justify-between mt-1">
                                    <div className="text-xs text-muted-foreground">
                                      {isEventToday
                                        ? "Today"
                                        : eventDate.toLocaleDateString()}
                                    </div>
                                    <div
                                      className={`text-xs px-1.5 py-0.5 rounded ${getEventTypeColor(event.type)}`}
                                    >
                                      {event.type}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Calendar Legend */}
              <Card>
                <CardHeader>
                  <CardTitle>Event Types</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span className="text-sm">Deadline</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm">Workshop</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <span className="text-sm">Assignment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-sm">Project</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <span className="text-sm">Session</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CalendarPage;
