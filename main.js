import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

const clubs = [
  'Texas Robotics',
  'Women in Engineering Program',
  'UT Programming Club',
  'Longhorn Entrepreneurship Agency',
  'AI Society at UT',
];

export default function HookedIn() {
  const [interestedClubs, setInterestedClubs] = useState([]);

  const handleInterest = (club) => {
    if (!interestedClubs.includes(club)) {
      setInterestedClubs([...interestedClubs, club]);
    }
  };

  const handleNotInterested = (club) => {
    setInterestedClubs(interestedClubs.filter(c => c !== club));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Longhorn Link</h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {clubs.map((club, index) => (
          <Card key={index} className="p-4 shadow-lg rounded-2xl bg-white">
            <CardContent>
              <h2 className="text-2xl font-semibold mb-4">{club}</h2>
              <div className="flex justify-between">
                <Button 
                  onClick={() => handleInterest(club)} 
                  className="flex items-center px-4 py-2 rounded-xl shadow-md">
                  <Check className="mr-2" /> Interested
                </Button>
                <Button 
                  onClick={() => handleNotInterested(club)} 
                  className="flex items-center px-4 py-2 rounded-xl shadow-md bg-red-500 text-white">
                  <X className="mr-2" /> Not Interested
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-3xl font-semibold mb-4">Your Interested Clubs</h2>
        {interestedClubs.length === 0 ? (
          <p className="text-gray-600">You haven't selected any clubs yet.</p>
        ) : (
          <ul className="list-disc pl-5 space-y-2">
            {interestedClubs.map((club, index) => (
              <li key={index} className="text-xl">{club}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
