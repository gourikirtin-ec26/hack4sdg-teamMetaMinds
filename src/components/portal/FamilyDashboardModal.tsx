import React, { useState } from 'react';
import { FamilyMember } from '../../types/clinical';
import { INITIAL_FAMILY_MEMBERS } from '../../data/portalData';

interface FamilyDashboardModalProps {
  isOpen: boolean;
  activeMemberId: string;
  onSelectMember: (member: FamilyMember) => void;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const FamilyDashboardModal: React.FC<FamilyDashboardModalProps> = ({
  isOpen,
  activeMemberId,
  onSelectMember,
  onClose,
  onShowToast,
}) => {
  const [members, setMembers] = useState<FamilyMember[]>(INITIAL_FAMILY_MEMBERS);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState('');
  const [newRelation, setNewRelation] = useState<FamilyMember['relationship']>('Father');
  const [newAge, setNewAge] = useState('60');
  const [newBlood, setNewBlood] = useState('B+');

  if (!isOpen) return null;

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const newMember: FamilyMember = {
      id: `fam-${Date.now()}`,
      name: newName.trim(),
      relationship: newRelation,
      age: Number(newAge),
      gender: newRelation === 'Mother' || newRelation === 'Daughter' ? 'Female' : 'Male',
      bloodGroup: newBlood,
      abhaId: `91-8492-4820-${Math.floor(1000 + Math.random() * 9000)}@abdm`,
      avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=160&auto=format&fit=crop&q=80',
      activeConditions: ['General Healthcare'],
      allergiesCount: 0,
    };

    setMembers((prev) => [...prev, newMember]);
    setShowAddForm(false);
    setNewName('');
    onShowToast(`Added ${newMember.name} (${newMember.relationship}) to Family Health Hub!`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-[#dce9ff] flex flex-col max-h-[85vh] overflow-hidden">
        {/* Header */}
        <div className="p-4 bg-[#eff4ff] border-b border-[#dce9ff] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#004357] flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[20px]">family_restroom</span>
            </div>
            <div>
              <h2 className="font-bold text-sm text-[#004357]">Family Health Dashboard</h2>
              <p className="text-xs text-[#40484c]">Manage records for your loved ones under one account</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#70787d] hover:bg-[#dce9ff]"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3.5 text-xs overflow-y-auto">
          <div className="p-3 rounded-xl bg-[#cce5ff]/40 border border-[#93ccff] flex items-center justify-between">
            <span className="text-[11px] text-[#00476e] font-medium leading-relaxed">
              Seamlessly switch between family members to manage their E-prescriptions, book appointments, and sync their ABHA health vaults.
            </span>
          </div>

          <div className="space-y-2.5">
            {members.map((m) => {
              const isActive = m.id === activeMemberId;

              return (
                <div
                  key={m.id}
                  onClick={() => {
                    onSelectMember(m);
                    onClose();
                  }}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-[#eff4ff] border-[#006398] ring-2 ring-[#006398]/30'
                      : 'bg-white border-[#e5eeff] hover:border-[#93ccff]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={m.avatarUrl}
                      alt={m.name}
                      className="w-12 h-12 rounded-xl object-cover border border-[#dce9ff]"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <strong className="text-sm text-[#0b1c30]">{m.name}</strong>
                        <span className="px-2 py-0.5 rounded-full bg-[#dce9ff] text-[#004357] font-bold text-[10px]">
                          {m.relationship}
                        </span>
                        {isActive && (
                          <span className="px-1.5 py-0.2 rounded bg-[#6ffbbe] text-[#002113] text-[9px] font-bold">
                            Active
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-[#40484c] mt-0.5">
                        {m.age}y • Blood Group: <strong className="text-[#ba1a1a]">{m.bloodGroup}</strong> • {m.gender}
                      </div>
                      <div className="text-[10px] text-[#70787d] font-mono mt-0.5">
                        ABHA: {m.abhaId}
                      </div>
                    </div>
                  </div>

                  <span className="material-symbols-outlined text-[#006398] text-[20px]">
                    {isActive ? 'check_circle' : 'radio_button_unchecked'}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Add member form */}
          {showAddForm ? (
            <form onSubmit={handleAddMember} className="p-3 rounded-xl bg-[#f8f9ff] border border-[#e5eeff] space-y-2.5">
              <span className="font-bold text-xs text-[#004357] block">Add New Family Member</span>
              <div>
                <label className="text-[10px] text-[#40484c] block mb-0.5">Full Legal Name</label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Ramesh Vance"
                  required
                  className="w-full h-9 px-3 bg-white border border-[#bfc8cd] rounded-lg text-xs"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="text-[10px] text-[#40484c] block mb-0.5">Relationship</label>
                  <select
                    value={newRelation}
                    onChange={(e) => setNewRelation(e.target.value as any)}
                    className="w-full h-9 px-2 bg-white border border-[#bfc8cd] rounded-lg text-xs"
                  >
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Spouse">Spouse</option>
                    <option value="Son">Son</option>
                    <option value="Daughter">Daughter</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] text-[#40484c] block mb-0.5">Age</label>
                  <input
                    type="number"
                    value={newAge}
                    onChange={(e) => setNewAge(e.target.value)}
                    className="w-full h-9 px-2 bg-white border border-[#bfc8cd] rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-[#40484c] block mb-0.5">Blood Group</label>
                  <select
                    value={newBlood}
                    onChange={(e) => setNewBlood(e.target.value)}
                    className="w-full h-9 px-2 bg-white border border-[#bfc8cd] rounded-lg text-xs"
                  >
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-3 py-1.5 text-xs text-[#70787d]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-[#004357] text-white font-bold text-xs"
                >
                  Save Member
                </button>
              </div>
            </form>
          ) : (
            <button
              onClick={() => setShowAddForm(true)}
              className="w-full py-2.5 rounded-xl border border-dashed border-[#006398] text-[#006398] font-bold text-xs flex items-center justify-center gap-1 hover:bg-[#eff4ff] transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">person_add</span>
              <span>Link Another Family Member</span>
            </button>
          )}

          <div className="pt-2 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-[#004357] text-white font-bold text-xs"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
